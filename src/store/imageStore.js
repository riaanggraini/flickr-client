import { observable, action ,runInAction} from 'mobx';
import axios from 'axios'
const baseUrl = 'http://localhost:3000'

class ImageStore {
    @observable images = {};
    @observable searchKey = "";
    @observable page = 1;
    @observable size = 10;
    @observable handleErrors = ""
    @observable activePage = 1
    @observable totalImages = ""
    @observable pages = ""

    @action 
    getImages = async() => {
        // condition searchkey is not empty
        try{
            let searchAble = ''
            if(this.searchKey !== ""){
                searchAble = `&search=${this.searchKey}`
            }   
            // fecth data to backend
            const response = await axios({
		        method: 'GET',
		        timeout: 10000,
		        url : `${baseUrl}/api/v1/images?page=${this.page}&size=${this.size}${searchAble}`,
            });
            runInAction('populate entities', () => {
                this.images = response.data;
                this.totalImages = response.data.meta.total
                this.pages = response.data.meta.pages
                this.size = response.data.meta.size
                this.page = response.data.meta.page
            });
        } catch(err){
            this.handleErrors = err;
       }
    }
}



export default ImageStore
