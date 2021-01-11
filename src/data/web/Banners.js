import { setImage } from '../../helpers';
import AboutUsBanner from '../../assets/images/banners/about-us.jpg';
import AdmissionBanner from '../../assets/images/banners/admission.jpg';
import AcademicsBanner from '../../assets/images/banners/academics.jpg';
import AlumniBanner from '../../assets/images/banners/alumni.jpg';
import CareerBanner from '../../assets/images/banners/career.jpg';
import ContactUsBanner from '../../assets/images/banners/contact-us.jpg';
import GalleryBanner from '../../assets/images/banners/gallery.jpg';
import StudentServicesBanner from '../../assets/images/banners/student-services.jpg';
import UpdatesBanner from '../../assets/images/banners/updates.jpg';

const AboutUsBannerObj = setImage('About us banner', AboutUsBanner);
const AdmissionBannerObj = setImage('Admission banner', AdmissionBanner);
const AcademicsBannerObj = setImage('Academics banner', AcademicsBanner);
const AlumniBannerObj = setImage('Alumni banner', AlumniBanner);
const CareerBannerObj = setImage('Career banner', CareerBanner);
const ContactUsBannerObj = setImage('Contact us banner', ContactUsBanner);
const GalleryBannerObj = setImage('Gallery banner', GalleryBanner);
const StudentServicesBannerObj = setImage('Student services banner', StudentServicesBanner);
const UpdatesBannerObj = setImage('Updates banner', UpdatesBanner);

export const banners = {
    AboutUsBannerObj,
    AdmissionBannerObj,
    AcademicsBannerObj,
    AlumniBannerObj,
    CareerBannerObj,
    ContactUsBannerObj,
    GalleryBannerObj,
    StudentServicesBannerObj,
    UpdatesBannerObj,
}