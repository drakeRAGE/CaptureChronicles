// import { useState } from 'react'
// import { getDownloadURL, ref,  getStorage, uploadBytesResumable } from 'firebase/storage'
// import { app } from '../firebase'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// export default function CreateListing() {
//     const max_50 = "{max 50}";
//     const {currentUser} = useSelector(state => state.user);
//     const navigate = useNavigate();
//     const [files, setFiles]= useState([]);
    
//     const[formData, setFormData] = useState({
//         imageUrls: [],
//         name: '',
//         description: '',
//         location: '',
//         organizer_name : '',
//         sponsers_detail : '',
//         organizational_detail : '',
//         ticketfee : 50,
//     });
    
//     const [imageUploadError, setImageUploadError] =useState(false);
//     const [uploading, setuploading] = useState(false);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);

//     // console.log(formData)
    
//     const handleImageSubmit = (e) => {
//         if(files.length>0 && files.length + formData.imageUrls.length<7) {
//             setuploading(true)
//             setImageUploadError(false)
//             const promises = [];
//             for (let i = 0; i < files.length; i++) {
//                 promises.push(uploadImage(files[i]));
//             }
//             Promise.all(promises).then((urls) => {
//                 setFormData({...formData, imageUrls: formData.imageUrls.concat(urls)});
//                 setImageUploadError(false);
//                 setuploading(false)
//             }).catch((error) => {
//                 setImageUploadError("Image Upload Failed (10 MB max): ");
//                 setuploading(false)
//             })
//         } else {
//             setImageUploadError("You can only upload up to 6 images.");
//             setuploading(false)
//         }
//     }

//     const uploadImage = async (file) => {
//         return new Promise((resolve, reject) => {
//             const storage = getStorage(app);
//             const fileName = new Date().getTime() + file.name;
//             const storageRef = ref(storage, fileName);
//             const uploadTask = uploadBytesResumable(storageRef, file);
            
//             // Listen for state changes on the upload task.
//             uploadTask.on('state-changed', (snapshot) => {
//                 const progress= (snapshot.bytesTransferred / snapshot.totalBytes) *100;
//                 console.log(`Upload is ${progress}% done`)
//             }, (error) => {
//                 reject(error);
//             },
//             ()=>{
//                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                     resolve(downloadURL);
//                 });
//             })
//         });
//     }

//     const handleRemoveImage = (index) => {
//         setFormData({
//             ...formData, 
//             imageUrls: formData.imageUrls.filter((_, i)=> i!==index),
//         })

//         console.log('working')
//     }

//     const handleChange = (e) => {

//         if(e.target.type === 'number' || e.target.type === 'text' || e.target.type === 'textarea') {
//             setFormData({
//                 ...formData,
//                 [e.target.id]: e.target.value,
//             })
//         }

//     }

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.imageUrls.length < 1)
//         return setError('You must upload at least one image');
//     //   if (+formData.regularPrice < +formData.discountPrice)
//     //     return setError('Discount price must be lower than regular price');
//       setLoading(true);
//       setError(false);
//       const res = await fetch('/api/listing/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...formData,
//           userRef: currentUser._id,
//         }),
//       });
//       const data = await res.json();
//       setLoading(false);
//       if (data.success === false) {
//         setError(data.message);
//       }
//     //   console.log(data.id);
//       navigate(`/listing/${data._id}`);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };
//   return (
//     <main className='p-3 max-w-4xl mx-auto'>
//         <h1 className='text-3xl font-semibold text-center my-7'>Create a Event</h1>

//         <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
//             <div className='flex flex-col gap-4 flex-1'>
//                 <input onChange={handleChange} value={formData.name} type='text' className='border p-3 rounded-lg' id='name' maxLength='40' minLength='5' placeholder='Name' />
//                 <input onChange={handleChange} value={formData.description} type='text' className='border p-3 rounded-lg' id='description' required placeholder='Description' />
//                 <input onChange={handleChange} value={formData.location} type='text' className='border p-3 rounded-lg' id='location' maxLength='40' required minLength='5' placeholder='Location' />
//                 <input onChange={handleChange} value={formData.organizer_name} type='text' className='border p-3 rounded-lg' id='organizer_name' maxLength='40' required minLength='5' placeholder='Organizer' />
//                 <input onChange={handleChange} value={formData.sponsers_detail} type='text' className='border p-3 rounded-lg' id='sponsers_detail' maxLength='40' required minLength='5' placeholder='Sponser detail' />
//                 <input onChange={handleChange} value={formData.organizational_detail} type='text' className='border p-3 rounded-lg' id='organizational_detail' maxLength='40' required minLength='5' placeholder='Organization detail' />

//                 <div className='flex flex-wrap gap-4'>

//                     <div className='flex items-center gap-2'>
//                         <p>Ticket Fee</p>
//                         <input type="number" id='ticketfee' min='50' max='50000' required className='p-3 border border-gray-300 rounded-lg '  onChange={handleChange} value={formData.ticketfee}/>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex flex-col flex-1 gap-4'>
//                 <p className='font-semibold'>Images:
//                 <span className='font-norma text-gray-600 ml-2'>The first image will be the cover {max_50} </span>
//                 </p>

//                 <div className='flex gap-4'>
//                     const <input onChange={(e)=> setFiles(e.target.files)} className='p-3 border border-gray-300 rounded-w-full' type="file" id='images' accept='image/*' multiple />
//                     <button type='button' onClick={handleImageSubmit} className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>{uploading ? 'Uploading...' : 'Upload Images'}</button>
//                 </div>
//                 <p className='text-red-700 tx-sm'>{imageUploadError && imageUploadError}</p>
//                 {
//                     formData.imageUrls.length > 0 && formData.imageUrls.map((url, index)=> (
//                         <div key={index} className='flex justify-between item-center p-3 border'>
//                             <img src={url} alt="listing image" className='w-20 h-20 object-contain rounded-lg'/>
//                             <button disabled={uploading} type='button' onClick={() => handleRemoveImage(index)} className='p-3 text-red-700 rounded-lg uppercase hover:opacity-95 '>Delete</button>
//                         </div>
//                     ))
//                 }
//                 <button disabled={loading || uploading} className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Creating...' : 'Create Event'}</button>

//                 {error && <p className='text-red-700 text-sm'>{error}</p> }
//             </div>


//         </form>
//     </main>
//   )
// }


import { useState } from 'react'
import { getDownloadURL, ref, getStorage, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function CreateListing() {
    const max_50 = "{max 50}";
    const { currentUser } = useSelector(state => state.user);
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    
    const [formData, setFormData] = useState({
        imageUrls: [],
        name: '',
        description: '',
        location: '',
        organizer_name: '',
        sponsers_detail: '',
        organizational_detail: '',
        ticketfee: 50,
        startDate: '',
        endDate: '',
    });
    
    const [imageUploadError, setImageUploadError] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleImageSubmit = (e) => {
        if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
            setUploading(true)
            setImageUploadError(false)
            const promises = [];
            for (let i = 0; i < files.length; i++) {
                promises.push(uploadImage(files[i]));
            }
            Promise.all(promises).then((urls) => {
                setFormData({ ...formData, imageUrls: formData.imageUrls.concat(urls) });
                setImageUploadError(false);
                setUploading(false)
            }).catch((error) => {
                setImageUploadError("Image Upload Failed (10 MB max): ");
                setUploading(false)
            })
        } else {
            setImageUploadError("You can only upload up to 6 images.");
            setUploading(false)
        }
    }

    const uploadImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            
            uploadTask.on('state-changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`)
            }, (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            })
        });
    }

    const handleRemoveImage = (index) => {
        setFormData({
            ...formData,
            imageUrls: formData.imageUrls.filter((_, i) => i !== index),
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.imageUrls.length < 1)
                return setError('You must upload at least one image');
            setLoading(true);
            setError(false);
            const res = await fetch('/api/listing/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    userRef: currentUser._id,
                }),
            });
            const data = await res.json();
            setLoading(false);
            if (data.success === false) {
                setError(data.message);
            }
            navigate(`/listing/${data._id}`);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <main className='p-3 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-7'>Create a Event</h1>

            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 flex-1'>
                    <input onChange={handleChange} value={formData.name} type='text' className='border p-3 rounded-lg' id='name' maxLength='40' minLength='5' placeholder='Name' />
                    <input onChange={handleChange} value={formData.description} type='text' className='border p-3 rounded-lg' id='description' required placeholder='Description' />
                    <input onChange={handleChange} value={formData.location} type='text' className='border p-3 rounded-lg' id='location' maxLength='40' required minLength='5' placeholder='Location' />
                    <input onChange={handleChange} value={formData.organizer_name} type='text' className='border p-3 rounded-lg' id='organizer_name' maxLength='40' required minLength='5' placeholder='Organizer' />
                    <input onChange={handleChange} value={formData.sponsers_detail} type='text' className='border p-3 rounded-lg' id='sponsers_detail' maxLength='40' required minLength='5' placeholder='Sponser detail' />
                    <input onChange={handleChange} value={formData.organizational_detail} type='text' className='border p-3 rounded-lg' id='organizational_detail' maxLength='40' required minLength='5' placeholder='Organization detail' />

                    <div className='flex flex-wrap gap-4'>
                        <div className='flex items-center gap-2'>
                            <p>Ticket Fee</p>
                            <input type="number" id='ticketfee' min='50' max='50000' required className='p-3 border border-gray-300 rounded-lg' onChange={handleChange} value={formData.ticketfee} />
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex items-center gap-2'>
                            <p>Start Date</p>
                            <input type="date" id='startDate' required className='p-3 border border-gray-300 rounded-lg' onChange={handleChange} value={formData.startDate} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <p>End Date</p>
                            <input type="date" id='endDate' required className='p-3 border border-gray-300 rounded-lg' onChange={handleChange} value={formData.endDate} />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col flex-1 gap-4'>
                    <p className='font-semibold'>Images:
                        <span className='font-norma text-gray-600 ml-2'>The first image will be the cover {max_50}</span>
                    </p>

                    <div className='flex gap-4'>
                        <input onChange={(e) => setFiles(e.target.files)} className='p-3 border border-gray-300 rounded-w-full' type="file" id='images' accept='image/*' multiple />
                        <button type='button' onClick={handleImageSubmit} className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>{uploading ? 'Uploading...' : 'Upload Images'}</button>
                    </div>
                    <p className='text-red-700 tx-sm'>{imageUploadError && imageUploadError}</p>
                    {
                        formData.imageUrls.length > 0 && formData.imageUrls.map((url, index) => (
                            <div key={index} className='flex justify-between item-center p-3 border'>
                                <img src={url} alt="listing image" className='w-20 h-20 object-contain rounded-lg' />
                                <button disabled={uploading} type='button' onClick={() => handleRemoveImage(index)} className='p-3 text-red-700 rounded-lg uppercase hover:opacity-95 '>Delete</button>
                            </div>
                        ))
                    }
                    <button disabled={loading || uploading} className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Creating...' : 'Create Event'}</button>

                    {error && <p className='text-red-700 text-sm'>{error}</p>}
                </div>
            </form>
        </main>
    )
}
