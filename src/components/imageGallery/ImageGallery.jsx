import React, {Component} from 'react';
import axios from "axios";
import SearchForm from "../searchForm/SearchForm";
import ImageList from "../imageList/ImageList";
import Spinner from "../loader/Spinner";
import Button from "../button/Button";
import Modal from "../modal/Modal";


const API = `23463781-df0a7bea6406d975ee94f89b5`;
const URL = `https://pixabay.com/api/`;
const filterResults = `photo&orientation=horizontal`;

class ImageGallery extends Component {

    state = {
        images: [],
        page: 1,
        query: "",
        isLoading: false,
        perPage: 12,
        error: null,
        showModal: false,
        largeImg: "",
    }


    componentDidUpdate(prevProps, prevState) {
        const {query, page} = this.state;
        if (query !== prevState.query && query !== "") {
            this.fetchData();
        }
        if (query === prevState.query && page !== prevState.page) {
            this.fetchData();
        }
    }


    fetchData = async () => {
        this.setState({isLoading: true})
        const {query, page, perPage} = this.state;
        try {
            const {data} = await axios.get(`${URL}?q=${query}&page=${page}&key=${API}&image_type=${filterResults}&per_page=${perPage}`)
            this.setState((prevState) => ({
                images: [...prevState.images, ...data.hits]
            }))
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({isLoading: false})
        }

        if (this.state.page > 1) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }
    }

    formSubmit = (query) => {
        this.setState({query, images: []})
    }

    showMore = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1
        }))
    }

    largeImageHandler = (e) => {
        const largeImageURL = e.target.dataset.source;
        this.setState({ largeImg: largeImageURL });
        this.handleToggleModal();
    };
    handleToggleModal = () => {
        this.setState((prevSt) => ({ showModal: !prevSt.showModal }));
    };


    render() {
        const {isLoading, images, showModal, largeImg} = this.state;
        return (
            <div>
                <SearchForm onSubmit={this.formSubmit}/>

                {isLoading ? (
                    <Spinner/>
                ) : (
                    <ImageList images={this.state.images} largeImgHandler={this.largeImageHandler}/>
                )}
                {images.length > 0 && <Button showMore={this.showMore} />}
                <Modal
                    open={showModal}
                    onClose={this.handleToggleModal}
                    largeImg={largeImg}
                />
            </div>
        );
    }

}

export default ImageGallery;