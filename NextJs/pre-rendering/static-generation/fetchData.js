//Static generation with fetching data from external api

export default function UsersList({users}) {
    return (
        <div>
            {users.map(user =>{
                return(<div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <hr />
                </div>)
            })}
        </div>
    )
}
//async function which run in build time to send its props to our page

export async function getStaticProps(){
    const response = await fetch('API URL HERE');
    const data = await response.json();

    return {
        porps:{
            users:data
        }
    }
}