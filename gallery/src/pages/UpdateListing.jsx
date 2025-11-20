// bug -> startDate and endDate values don't show up for updating

<<<<<<< HEAD
import { useState, useEffect} from 'react'
import { getDownloadURL, ref,  getStorage, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
import {useSelector} from 'react-redux'
import { useNavigate, useParams} from 'react-router-dom';
export default function CreateListing() {
    const max_50 = "{max 50}";
    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();
    const [files, setFiles]= useState([]);
    const params = useParams();
    
    const[formData, setFormData] = useState({
        imageUrls: [],
        name: '',
        description: '',
        location: '',
        organizer_name : '',
        sponsers_detail : '',
        organizational_detail : '',
        ticketfee : 50,
        startDate: '',
        endDate: '',
    });
    
    const [imageUploadError, setImageUploadError] =useState(false);
    const [uploading, setuploading] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const listingId = params.listingId;
=======
import { useState, useEffect } from 'react';
import { getDownloadURL, ref, getStorage, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
>>>>>>> 9053f05bd4b8ca414c680f7e2e6f077783c391c5

export default function UpdateListing() {
  const max_50 = '{max 50}';
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const params = useParams();

<<<<<<< HEAD
            if(data.success === false) {
                console.log(data.message)
                return;
            }
            // Format dates for input fields (YYYY-MM-DD)
            const formattedData = {
                ...data,
                startDate: data.startDate ? data.startDate.split('T')[0] : '',
                endDate: data.endDate ? data.endDate.split('T')[0] : '',
            };
            setFormData(formattedData)
=======
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
>>>>>>> 9053f05bd4b8ca414c680f7e2e6f077783c391c5

  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const listingId = params.listingId;

  // Fetch listing data and format date fields
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/listing/get/${listingId}`);
        const data = await res.json();

        if (data.success === false) {
          console.log(data.message);
          return;
        }

        const formattedData = {
          ...data,
          startDate: data.startDate ? data.startDate.split('T')[0] : '',
          endDate: data.endDate ? data.endDate.split('T')[0] : '',
        };

        setFormData(formattedData);
      } catch (err) {
        console.error('Error fetching listing:', err);
      }
    };

    fetchListing();
  }, [listingId]);



  // Upload image to Firebase
  const uploadImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state-changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => resolve(downloadURL));
        }
      );
    });
  };



  // Handle multiple image uploads
  const handleImageSubmit = () => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 51) {
      setUploading(true);
      setImageUploadError(false);
      const promises = files.map((file) => uploadImage(file));

      Promise.all(promises)
        .then((urls) => {
          setFormData({ ...formData, imageUrls: formData.imageUrls.concat(urls) });
          setUploading(false);
        })
        .catch(() => {
          setImageUploadError('Image Upload Failed (100 MB max)');
          setUploading(false);
        });
    } else {
      setImageUploadError('You can only upload up to 50 images.');
    }
  };







  // Remove image from formData
  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };



  // Handle input changes
  const handleChange = (e) => {
    if (
      ['number', 'text', 'textarea', 'date'].includes(e.target.type)
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };



  // Submit updated listing
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1) return setError('You must upload at least one image');
      setLoading(true);
      setError(false);

      const res = await fetch(`/api/listing/update/${params.listingId}`, {
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
        return;
      }

      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Update an Event</h1>

      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
        {/* LEFT SIDE */}
        <div className='flex flex-col gap-4 flex-1'>
          <input onChange={handleChange} value={formData.name} type='text' className='border p-3 rounded-lg' id='name' maxLength='40' minLength='5' placeholder='Name' />
          <input onChange={handleChange} value={formData.description} type='text' className='border p-3 rounded-lg' id='description' required placeholder='Description' />
          <input onChange={handleChange} value={formData.location} type='text' className='border p-3 rounded-lg' id='location' required placeholder='Location' />
          <input onChange={handleChange} value={formData.organizer_name} type='text' className='border p-3 rounded-lg' id='organizer_name' required placeholder='Organizer' />
          <input onChange={handleChange} value={formData.sponsers_detail} type='text' className='border p-3 rounded-lg' id='sponsers_detail' required placeholder='Sponsor detail' />
          <input onChange={handleChange} value={formData.organizational_detail} type='text' className='border p-3 rounded-lg' id='organizational_detail' required placeholder='Organization detail' />

          <div className='flex flex-wrap gap-4'>
            <div className='flex items-center gap-2'>
              <p>Ticket Fee</p>
              <input type='number' id='ticketfee' min='50' max='50000' required className='p-3 border border-gray-300 rounded-lg' onChange={handleChange} value={formData.ticketfee} />
            </div>
          </div>

          <div className='flex flex-wrap gap-4'>
            <div className='flex items-center gap-2'>
              <p>Start Date</p>
              <input type='date' id='startDate' required className='p-3 border border-gray-300 rounded-lg' onChange={handleChange} value={formData.startDate} />
            </div>
            <div className='flex items-center gap-2'>
              <p>End Date</p>
              <input type='date' id='endDate' required className='p-3 border border-gray-300 rounded-lg' onChange={handleChange} value={formData.endDate} />
            </div>
          </div>
        </div>





        <div className='flex flex-col flex-1 gap-4'>
          <p className='font-semibold'>
            Images:
            <span className='font-normal text-gray-600 ml-2'>The first image will be the cover {max_50}</span>
          </p>

          <div className='flex gap-4'>
            <input onChange={(e) => setFiles(e.target.files)} className='p-3 border border-gray-300 rounded-lg' type='file' id='images' accept='image/*' multiple />
            <button type='button' onClick={handleImageSubmit} className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>
              {uploading ? 'Uploading...' : 'Upload Images'}
            </button>
          </div>

          {imageUploadError && <p className='text-red-700 text-sm'>{imageUploadError}</p>}

          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div key={index} className='flex justify-between items-center p-3 border'>
                <img src={url} alt='listing' className='w-20 h-20 object-contain rounded-lg' />
                <button
                  disabled={uploading}
                  type='button'
                  onClick={() => handleRemoveImage(index)}
                  className='p-3 text-red-700 rounded-lg uppercase hover:opacity-95'
                >
                  Delete
                </button>
              </div>
            ))}

          <button disabled={loading || uploading} className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            {loading ? 'Updating...' : 'Update Event'}
          </button>

          {error && <p className='text-red-700 text-sm'>{error}</p>}
        </div>
      </form>
    </main>
  );



  
}
