import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Dashboard from './view/Dashboard';
import Login from './view/Login';
import Reg from './view/Reg';
import ProductList from './component/ProductList';
import AddProductManual from './component/AddProductManual';
import UploadBulk from './component/UploadBulk';
import CategoryList from './component/CategoryList';
import AddCategory from './component/AddCategory';
import AdminRouter from "./privateRoute/PrivateRoute";
import VendorRouter from "./privateRoute/PrivateRoute";
import Vendor from './component/admin/Vendor';
import VendorEdit from './component/admin/VendorEdit';
import VendorProductList from './component/vendor/ProductList';
import ProductView from './component/ProductView';
import ProductEdit from './component/ProductEdit';
import ImageList from './component/ImageList';
import AddImages from './component/AddImages';
import ImagesView from './component/ImageListView';

import Profile from './component/vendor/Profile';
import AddVendor from './component/admin/AddVendor';
import DescriptionSync from './component/sync/DescriptionSync';
import Cms from './component/admin/Cms';
import CmsList from './component/admin/CmsList';
import CmsEdit from './component/admin/CmsEdit';
import CouponList from './component/admin/CouponList';
import AddCoupon from './component/admin/AddCoupon';
import EditCoupon from './component/admin/EditCoupon';
import Checkout from './component/Checkout';
import OrderDetails from './component/OrderDetails';
import Settings from './component/Settings';
import PrintOrder from './component/PrintOrder';

import GeneralOption from './component/GeneralOption';
import AdvertiseList from './component/AdvertiseList';
import AdvertiseManagement from './component/AdvertiseManagement';

export default function App() {
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();
  console.log("AUtH---------", auth);
  useEffect(() => {
    if (auth?.authenticating) {
      navigate("/home");
    }
  }, [auth])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/home" element={<AdminRouter redirectTo="/"><Dashboard /></AdminRouter>} />
        <Route path="/vendor" element={<AdminRouter redirectTo="/"><Vendor /></AdminRouter>} />
        <Route path="/editVendor/:id" element={<AdminRouter redirectTo="/"><VendorEdit /></AdminRouter>} />
        <Route path="/viewproduct/:type/:id/:productId" element={<AdminRouter redirectTo="/"><ProductView /></AdminRouter>} />
        <Route path="/editproduct/:type/:id/:productId" element={<AdminRouter redirectTo="/"><ProductEdit /></AdminRouter>} />
        <Route path="/viewimages/:type/:id/:productId" element={<AdminRouter redirectTo="/"><ImagesView /></AdminRouter>} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/image" element={<ImageList />} />
        <Route path="/addimages" element={<AddImages />} />
        <Route path="/addproduct" element={<AddProductManual />} />
        <Route path="/upload" element={<UploadBulk />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addvendor" element={<AdminRouter redirectTo="/"><AddVendor /></AdminRouter>} />
        <Route path="/sync" element={<AdminRouter redirectTo="/"><DescriptionSync /></AdminRouter>} />
        <Route path="/cms" element={<AdminRouter redirectTo="/"><Cms /></AdminRouter>} />
        <Route path="/cmslist" element={<AdminRouter redirectTo="/"><CmsList /></AdminRouter>} />
        <Route path="/cmsedit/:role/:userId/:cmsId" element={<AdminRouter redirectTo="/"><CmsEdit /></AdminRouter>} />
        <Route path="/couponlist" element={<AdminRouter redirectTo="/"><CouponList /></AdminRouter>} />
        <Route path="/addcoupon" element={<AdminRouter redirectTo="/"><AddCoupon /></AdminRouter>} />
        <Route path="/editcoupon/:role/:userId/:couponId" element={<AdminRouter redirectTo="/"><EditCoupon /></AdminRouter>} />
        <Route path="/orders" element={<AdminRouter redirectTo="/"><Checkout /></AdminRouter>} />
        <Route path="/orderdetails/:id" element={<AdminRouter redirectTo="/"><OrderDetails /></AdminRouter>} />
        <Route path="/settings" element={<AdminRouter redirectTo="/"><Settings /></AdminRouter>} />
        <Route path="/print-order/:id" element={<AdminRouter redirectTo="/"><PrintOrder /></AdminRouter>} />
        <Route path="/generaloption" element={<AdminRouter redirectTo="/"><GeneralOption /></AdminRouter>} />
        <Route path="/advertiseList" element={<AdminRouter redirectTo="/"><AdvertiseList /></AdminRouter>} />
        <Route path="/advertiseManagement" element={<AdminRouter redirectTo="/"><AdvertiseManagement /></AdminRouter>} />
      </Routes>
    </div>
  )
}

