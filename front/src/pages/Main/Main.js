import Post from '../../components/Post/Post'
import SideBar from '../../components/SideBar/SideBar'
import './main.scss'

const data = [1,2,3];

const Main = () => {
    return(
        <div class="main-page">
            <div>
                {data.map(num => <Post num={num}/>)}
            </div>
            <div>
                <SideBar/>
            </div>
        </div>
    )
}

export default Main