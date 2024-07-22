import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import ListingItem from '../components/ListingItem';


// bug -> The search with previous, ongoing and previous events  is not working currently, but I think it will be fixed soon as the other types are working but I am currently some lazy so sorry for now
export default function Search() {
    const navigate = useNavigate();
    const [sidebardata, setSidebardata] = useState({
        sort: 'ticketfee',
        order: 'desc',
    })
    
    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(()=> {
        const urlParams = new URLSearchParams(location.search)
        const searchTermFromUrl = urlParams.get('searchTerm')
        const sortFromUrl = urlParams.get('sort')
        const orderFromUrl = urlParams.get('order')

        if(searchTermFromUrl ||
        sortFromUrl ||
        orderFromUrl) {
            setSidebardata({
                searchTerm: searchTermFromUrl || '',
                sort: sortFromUrl || 'created_at',
                order: orderFromUrl  || 'desc',
            });
        }

        const fetchListings = async () => {
            setLoading(true);
            setShowMore(false);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/api/listing/get?${searchQuery}`);
            const data = await res.json();

            if(data.length > 8 ) {
                setShowMore(true); 
            } else {
                setShowMore(false);
            }
            setListings(data);
            setLoading(false);
        };

        fetchListings();
    }, [location.search])

    const handleChange = (e) => {
        if(e.target.id === 'searchTerm') {
            setSidebardata({...sidebardata, searchTerm: e.target.value})
        }

        if (e.target.id === 'sort_order') {
            const sort = e.target.value.split('_')[0] || 'created_at';

            const order = e.target.value.split('_')[1] || 'desc';

            setSidebardata({ ...sidebardata, sort, order });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const urlParams = new URLSearchParams();

        urlParams.set('searchTerm', sidebardata.searchTerm)
        urlParams.set('sort', sidebardata.sort)
        urlParams.set('order', sidebardata.order)

        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`)
    }

    const onShowMoreClick = async () => {
        const numberOfListings = listings.length;
        const startIndex = numberOfListings;
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('startIndex', startIndex);
        const searchQuery = urlParams.toString();
        console.log(searchQuery);
        const res = await fetch(`/api/listing/get?${searchQuery}`);
        const data = await res.json();
        if (data.length < 9) {
        setShowMore(false);
        }
        setListings([...listings, ...data]);
    };

    console.log(listings)

  return (
    <div className='flex flex-col md:flex-row'>
        <div className='p-7 border-b-2 md:border-r-2 md:min-h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                <div className='flex items-center gap-2'>
                    <label className='whitespace-nowrap'>Search Term</label>
                    <input type="text" id='searchTerm' placeholder='Search...' className='border rounded-lg p-3 w-full' value={sidebardata.searchTerm} onChange={handleChange}/>
                </div>
                
                <div className='flex items-center gap-2'>
                    <label >Sort :</label>
                    <select onChange={handleChange} defaultValue={'created_at_desc'} className='border rounded-lg p-3' id="sort_order">
                        <option value="ticketfee_desc" className='font-semibold'>Price high to low</option>
                        <option value="ticketfee_asc" className='font-semibold'>Price low to high</option>
                        <option value="createdAt_desc" className='font-semibold'>Latest</option>
                        <option value="createdAt_asc" className='font-semibold'>Oldest</option>
                    </select>
                </div>
                <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Search</button>
            </form>
        </div>

        <div className='flex-1'>
            <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Events results :</h1>
            <div className='p-7 flex flex-wrap gap-4'>
                {!loading && listings.length === 0 && (
                    <p className='text-xl text-slate-700'>No Event found!</p>
                )}
                {loading && (
                    <p className='text-xl text-slate-700 text-center w-full'>Loading...</p>
                )}

                {
                    !loading && 
                    listings && 
                    listings.map((listing)=> (
                        <ListingItem key={listing._id} listing={listing} />
                    ))
                }

                {showMore && (
                    <button className='text-green-700 hover:underline p-7 text-center w-full' onClick={onShowMoreClick}>Show more</button>
                )}
            </div>
        </div>
    </div>
  )
}
