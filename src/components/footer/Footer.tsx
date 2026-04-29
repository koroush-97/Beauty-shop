// @components
import logo from "../../assets/photo/logo-beauty-footer.png";
import TitleItem from "../titleItem/TitleItem";
import IconButton from "../buttons/iconBuuton/IconButton";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaAppStoreIos } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border relative min-h-160  flex justify-center items-end">
      <div className="hidden md:block w-full absolute -z-20 bg-yellow bottom-0 h-full md:h-[80%] rounded-t-[50px] "></div>
      <div className=" md:hidden w-[80%] rounded-t-4xl absolute -z-20 bg-yellow -top-3  mx-auto h-12.5"></div>
      <div className="bg-footer relative rounded-t-[50px] w-full min-h-140 md:min-h-150 md:w-[95%] z-20 mx-auto flex flex-col items-center pt-12.5 px-3">
        <div className="w-full p-2 ">
          <div className="w-full flex justify-end">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className=" w-full text-right pb-5 border-b border-muted ">
          <p className=" md:text-center ">
            فروشگاه بیوتی استایل ما با هدف ارائه محصولات باکیفیت و اورجینال در
            حوزه پوشاک تاسیس شده است. ما به دنبال ایجاد تجربه‌ای دلپذیر و
            رضایت‌بخش برای مشتریان خود هستیم، و با ارائه محصولاتی از برندهای
            معتبر و محبوب جهانی، به نیازهای مختلف شما پاسخ می‌دهیم.
          </p>
        </div>
        <div className=" w-full flex flex-row  border-b border-muted pt-5">
          <div className="flex-1 pb-5">
            <div className="flex flex-col p-1 flex-1 text-end">
              <div className="pb-2 pt-1 justify-end flex">
                <TitleItem
                  header="حساب کاربری"
                  content="Account"
                  icon={<FaCircle color="#fcbe13" />}
                />
              </div>
              <Link to="#" className=" pr-2">
                {" "}
                <p> ورود و ثبت نام </p>
              </Link>
              <Link to="#" className="pr-2">
                <p> مدیریت حساب </p>
              </Link>
              <Link to="#" className="pr-2">
                {" "}
                <p>سبد خرید</p>
              </Link>
              <Link to="#" className="pr-2">
                {" "}
                <p>پیگیری سفارشات </p>
              </Link>
              <Link to="#" className="pr-2">
                {" "}
                <p>سبد خرید</p>
              </Link>
              <Link to="#" className="pr-2">
                {" "}
                <p>تاریحچه خرید</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-1 flex-1 text-end">
            <div className="pb-2 pt-1 justify-end flex">
              <TitleItem
                header="دسترسی سریع"
                content="Quick Access"
                icon={<FaCircle color="#fcbe13" />}
              />
            </div>
            <Link to="#" className=" pr-2">
              {" "}
              <p> صفحه اصلی</p>
            </Link>
            <Link to="#" className="pr-2">
              <p> دسته بندی </p>
            </Link>
            <Link to="#" className="pr-2">
              {" "}
              <p>محصولات</p>
            </Link>
            <Link to="#" className="pr-2">
              {" "}
              <p>پیگیری سفارشات </p>
            </Link>
            <Link to="#" className="pr-2">
              {" "}
              <p>درباره ما </p>
            </Link>
            <Link to="#" className="pr-2">
              {" "}
              <p> تماس با ما</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full pt-2">
          <div className="w-ful flex justify-end">
            <TitleItem
              header="اطلاعات تماس"
              content="Contact Information"
              icon={<FaCircle color="#fcbe13" />}
            />
          </div>
          <div className="flex flex-col ">
            <div className=" flex justify-end p-2">
              <TitleItem
                content="تهران، خیابان ولیعصر، بالاتر از میدان ونک، خیابان میرداماد، پلاک ۱۵۵، طبقه اول"
                icon={<IoLocationSharp color="#fff" />}
              />
            </div>
            <div className=" flex justify-end p-2">
              <TitleItem
                content="
              2324674021
              "
                icon={<FaPhoneAlt color="#fff" />}
              />
            </div>
            <div className=" flex justify-end p-2">
              <TitleItem
                content="
              beautyshop@info.com
              "
                icon={<MdEmail color="#fff" />}
              />
            </div>
            <div className="flex flex-wrap gap-x-2 justify-center gap-y-2 p-2">
              <IconButton variant="secondary" width={80} height={30}>
                <div className="flex justify-center items-center ">
                  <FaWhatsapp />
                </div>
              </IconButton>
              <IconButton variant="secondary" width={80} height={30}>
                <div className="flex justify-center items-center ">
                  <FaTelegramPlane />
                </div>
              </IconButton>
              <IconButton variant="secondary" width={80} height={30}>
                <div className="flex justify-center items-center ">
                  <FaInstagram />
                </div>
              </IconButton>
              <IconButton variant="secondary" width={80} height={30}>
                <div className="flex justify-center items-center ">
                  <CiFacebook />
                </div>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-bg w-full pt-2">
          <div className="w-ful flex justify-end  w-full">
            <TitleItem
              header="دانلود اپلیکیشن"
              content="Application Download"
              icon={<FaCircle color="#fcbe13" />}
            />
          </div>
          <div className="w-full pt-5 pb-3 px-5 gap-x-5 justify-center flex flex-wrap flex-row gap-y-2">
            <IconButton variant="secondary" width={150} height={40}>
              <div className="flex justify-center items-center ">
                <FaAndroid />
              </div>
            </IconButton>
            <IconButton variant="secondary" width={150} height={40}>
              <div className="flex justify-center items-center ">
                <FaAppStoreIos />
              </div>
            </IconButton>
          </div>
        </div>
        <div className="flex flex-row">
          <div>1</div>
          <div>2</div>
        </div>
        <div>
          <p>paragheraph lastes</p>
        </div>
      </div>
    </div>
  );
}
