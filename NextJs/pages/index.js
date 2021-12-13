//using Link component to navigate between pages
import Link from 'next/link'
//to navigate programmatically we use next hook useRouter
import {useRouter} from 'next/router'

export default function HomePage() {
    const router = useRouter();
    const handleNavigate=()=>{
        router.push('/product')
    }
    return (
        <div>
            this is home page
            <Link href='/product'><a>explore our products list</a></Link>
            <button onClick={handleNavigate}>Go to products list page</button>
        </div>
    )
}
