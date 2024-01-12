import { useSearchParams } from "react-router-dom";

function MainPage() {
    const [searchParams, setSearchParas] = useSearchParams()
    console.log(searchParams.get('mode'))
    //  / => null
    // mode= Dark => dark
    return ( <div className={['Main', searchParams.get('mode').join(' ')]}>

        <h1>MainPage</h1>
        <button onClick={() => {
            //{mode: 'Dark'} 설정
            setSearchParas({mode:'Dark'})
        }}>Dark mode</button>
    </div> );
}

export default MainPage;