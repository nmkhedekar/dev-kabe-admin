import Header from '../header/Header';
import { useSelector } from 'react-redux';
import VendorSidebar from '../sidebar/VendorSidebar';
import Sidebarr from '../sidebar/Sidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import axios from "axios";
import { useEffect, useState } from 'react';

const AdvertiseList = () => {
    const auth = useSelector(state => state.auth)
    const [advertise, setAdvertise] = useState([]);

    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await axios.get('https://google-search72.p.rapidapi.com/imagesearch', {
        //         params: { query: 'deals', gl: 'us', lr: 'en', num: '10', start: '0', sort: 'relevance' },
        //         headers: {
        //             'X-RapidAPI-Key': '869923e5f1msh96fc6cf21ebaba1p193d59jsnda239cd7a5cc',
        //             'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        //         }
        //     });
        //     setAdvertise(response.data);
        //     console.log("ad result",response.data);
        // }
        // fetchData();
        const fetchData = async () => {
            const response = await axios.post("http://localhost:5000/admin/getAdminImagesById", {
                email: auth?.user?.email
            });
            console.log("res", response);
        }
        fetchData();
    }, []);

    return (
        <div className="sidebar-mini skin-green-light">
            <div className="wrapper">
                <Header />
                {auth?.user?.role === "Vendor" ? <VendorSidebar /> : <Sidebarr />}

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Advertise List
                        </h1>
                    </section>
                    {/* Main content */}

                    <section class="content">
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="box">
                                    <div class="box-body order-detail">
                                        <div className='generaloption'>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}

                <Footer />
                <Tool />

                <div className="control-sidebar-bg" />
            </div>


        </div>
    )
}

export default AdvertiseList