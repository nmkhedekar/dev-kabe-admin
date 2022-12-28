import Header from '../header/Header';
import { useSelector } from 'react-redux';
import VendorSidebar from '../sidebar/VendorSidebar';
import Sidebarr from '../sidebar/Sidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import axios from "axios";
import { useEffect, useState } from 'react';

const AdvertiseManagement = () => {
    const auth = useSelector(state => state.auth)
    const [imageFiles, setImageFiles] = useState();
    console.log("user", auth?.user);

    const uploadImages = async (e) => {
        e.preventDefault();        
        const formData = new FormData();
        // formData.append("multiFile",chooseFile[0]); 
        Object.values(imageFiles).forEach(file => {
            console.log(file)
            formData.append("multiFile", file);
        });
        formData.append("adminEmail", auth?.user?.email)
        const res = await axios.post("http://localhost:5000/admin/postAdvertisement", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log("resp", res);
    }
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
                            Advertise Management
                        </h1>
                    </section>
                    {/* Main content */}

                    <section class="content">
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="box">
                                    <div class="box-body order-detail">
                                        <div className='generaloption'>
                                            <form onSubmit={uploadImages} >
                                                <input multiple type="file" onChange={(e) => setImageFiles(e.target.files)} />
                                                <input type="submit" value="Upload" />
                                            </form>
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

export default AdvertiseManagement