
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from './MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';


const PopularMenu = () => {
    const [menu] =useMenu()
    const popularMenu = menu.filter(item=>item.category==='popular')
    // console.log(menu)
//    const [menu,setMenu] = useState([])
//    useEffect(()=>{
//     fetch('data.json')
//     .then(res =>res.json())
//     .then(data=>{
//         const filterItem = data.filter(item=> item.category === "popular")
//         setMenu(filterItem)
//     })
   
//    },[])
//    const [menu, setMenu] = useState([])
// useEffect(()=>{
//     fetch('data.json')
//     .then(res=>res.json())
//     .then(data=>{ const popularItem = data.filter(item=> item.category === "popular")
//         setMenu(popularItem)})
    
// },[])
//     console.log(menu)
    return (
        <div className='mb-20'>
            <SectionTitle
            SubHeading={'---Check it out---'} Heading={'FROM OUR MENU'}>

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-20 md:w-[1000px] mx-auto'>
                {
                    popularMenu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 flex justify-center mx-auto mb-20 mt-10 uppercase'>View Full  Menu</button>
        </div>
    );
};

export default PopularMenu;