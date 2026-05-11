// @photos
import logo from "../../assets/photo/logo-beauty-footer.png";
import etemadLogo from "../../assets/photo/footer-moj1.png";
import etemadLogo2 from "../../assets/photo/footer-moj2.png";

// @components
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
import Icon from "../icon/Icon";

export default function Footer() {
  return (
    <div className=" relative min-h-160  flex justify-center items-end">
      <div className="hidden md:block w-full absolute -z-20 bg-yellow bottom-0 h-full md:h-[80%] rounded-t-[50px] "></div>
      <div className=" md:hidden w-[80%] rounded-t-4xl absolute -z-20 bg-yellow -top-3  mx-auto h-12.5"></div>
      <div className="bg-footer  relative rounded-t-[50px] w-full min-h-140 md:min-h-150 md:w-[95%] z-20 mx-auto flex flex-col items-center pt-12.5 px-3">
        {/* -----mobile-responsive--- */}
        <div className=" md:hidden">
          <div className="w-full p-2  ">
            <div className="w-full flex justify-end ">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className=" w-full text-right pb-5 border-b border-muted">
            <p dir="rtl" className=" text-justify md:text-center">
              فروشگاه بیوتی استایل ما با هدف ارائه محصولات باکیفیت و اورجینال در
              حوزه پوشاک تاسیس شده است. ما به دنبال ایجاد تجربه‌ای دلپذیر و
              رضایت‌بخش برای مشتریان خود هستیم، و با ارائه محصولاتی از برندهای
              معتبر و محبوب جهانی، به نیازهای مختلف شما پاسخ می‌دهیم.
            </p>
          </div>
        </div>
        {/* ----tablet-responsive */}
        <div className=" hidden md:flex md:flex-row-reverse  ">
          <div className="flex flex-row-reverse flex-1">
            <div className="flex-1">
              {" "}
              <div className="w-full p-2  ">
                <div className="w-full flex justify-end ">
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className=" w-full text-right pb-5  ">
                <p dir="rtl" className=" md:text-justify ">
                  فروشگاه بیوتی استایل ما با هدف ارائه محصولات باکیفیت و
                  اورجینال در حوزه پوشاک تاسیس شده است. ما به دنبال ایجاد
                  تجربه‌ای دلپذیر و رضایت‌بخش برای مشتریان خود هستیم، و با ارائه
                  محصولاتی از برندهای معتبر و محبوب جهانی، به نیازهای مختلف شما
                  پاسخ می‌دهیم.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col p-1 lg:pr-10 flex-1 text-end justify-center ">
                <div className="pb-2 pt-4 justify-end flex  ">
                  <TitleItem
                    header="دسترسی سریع"
                    content="Quick Access"
                    icon={
                      <Icon className=" text-[8px] md:text-[15px] ">
                        <FaCircle color="#fcbe13" />
                      </Icon>
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-2 justify-center items-end">
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
            </div>
          </div>

          <div className="hidden lg:flex flex-1">
            <div className="flex-1 pb-5 ">
              <div className="flex flex-col p-1 flex-1 text-end  ">
                <div className="pb-2 pt-3 justify-end flex ">
                  <TitleItem
                    header="حساب کاربری"
                    content="Account"
                    icon={
                      <Icon className=" text-[8px] md:text-[15px] ">
                        <FaCircle color="#fcbe13" />
                      </Icon>
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-3">
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
            </div>
            <div className="md:flex flex-col w-full pt-5 hidden  flex-1  md:pr-10 lg:pr-1">
              <div className="w-ful flex justify-end">
                <TitleItem
                  header="اطلاعات تماس"
                  content="Contact Information"
                  icon={
                    <Icon className=" text-[8px] md:text-[15px] ">
                      <FaCircle color="#fcbe13" />
                    </Icon>
                  }
                />
              </div>
              <div className="flex flex-col ">
                <div className=" flex justify-end p-2">
                  <TitleItem
                    content="تهران، خیابان ولیعصر، بالاتر از میدان ونک، خیابان میرداماد، پلاک ۱۵۵، طبقه اول"
                    icon={
                      <Icon className=" text-[20px] md:text-2xl ">
                        <IoLocationSharp color="#fff" />
                      </Icon>
                    }
                  />
                </div>
                <div className=" flex justify-end p-2">
                  <TitleItem
                    content="
              2324674021 - 1010 111 0917
              "
                    icon={
                      <Icon className=" text-[20px] md:text-2xl ">
                        <FaPhoneAlt color="#fff" />
                      </Icon>
                    }
                  />
                </div>
                <div className=" flex justify-end p-2">
                  <TitleItem
                    content="
              beautyshop@info.com
              "
                    icon={
                      <Icon className=" text-[20px] md:text-2xl ">
                        <MdEmail color="#fff" />
                      </Icon>
                    }
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
          </div>
        </div>
        <div className=" w-full flex flex-row  border-b border-muted pt-5 ">
          <div className=" lg:hidden flex-1 pb-5">
            <div className="flex flex-col p-1 flex-1 text-end">
              <div className="pb-2 pt-1 justify-end flex">
                <TitleItem
                  header="حساب کاربری"
                  content="Account"
                  icon={
                    <Icon className=" text-[8px] md:text-[15px] ">
                      <FaCircle color="#fcbe13" />
                    </Icon>
                  }
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
          <div className="flex flex-col p-1 flex-1 text-end md:hidden">
            <div className="pb-2 pt-1 justify-end flex">
              <TitleItem
                header="دسترسی سریع"
                content="Quick Access"
                icon={
                  <Icon className=" text-[8px] md:text-[15px] ">
                    <FaCircle color="#fcbe13" />
                  </Icon>
                }
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
          <div className="lg:hidden md:flex flex-col w-full pt-5 hidden flex-1">
            <div className="w-ful flex justify-end">
              <TitleItem
                header="اطلاعات تماس"
                content="Contact Information"
                icon={
                  <Icon className=" text-[8px] md:text-[15px] ">
                    <FaCircle color="#fcbe13" />
                  </Icon>
                }
              />
            </div>
            <div className="flex flex-col ">
              <div className=" flex justify-end p-2">
                <TitleItem
                  content="تهران، خیابان ولیعصر، بالاتر از میدان ونک، خیابان میرداماد، پلاک ۱۵۵، طبقه اول"
                  icon={
                    <Icon className=" text-[20px] md:text-2xl ">
                      <IoLocationSharp color="#fff" />
                    </Icon>
                  }
                />
              </div>
              <div className=" flex justify-end p-2">
                <TitleItem
                  content="
              2324674021 - 1010 111 0917
              "
                  icon={
                    <Icon className=" text-[20px] md:text-2xl ">
                      <FaPhoneAlt color="#fff" />
                    </Icon>
                  }
                />
              </div>
              <div className=" flex justify-end p-2">
                <TitleItem
                  content="
              beautyshop@info.com
              "
                  icon={
                    <Icon className=" text-[20px] md:text-2xl ">
                      <MdEmail color="#fff" />
                    </Icon>
                  }
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
        </div>

        <div className="flex flex-row w-full pt-5 ">
          <div className="flex-1  lg:hidden ">
            <div className="w-ful flex justify-end">
              <TitleItem
                header="اطلاعات تماس"
                content="Contact Information"
                icon={
                  <Icon className=" text-[8px] md:text-[15px] ">
                    <FaCircle color="#fcbe13" />
                  </Icon>
                }
              />
            </div>
            <div className="flex flex-col ">
              <div className=" flex justify-end p-2">
                <TitleItem
                  content="تهران، خیابان ولیعصر، بالاتر از میدان ونک، خیابان میرداماد، پلاک ۱۵۵، طبقه اول"
                  icon={
                    <Icon className=" text-[20px] md:text-2xl ">
                      <IoLocationSharp color="#fff" />
                    </Icon>
                  }
                />
              </div>
              <div className=" flex justify-end p-2">
                <TitleItem
                  content="
              2324674021 - 1010 111 0917
              "
                  icon={
                    <Icon className=" text-[20px] md:text-2xl ">
                      <FaPhoneAlt color="#fff" />
                    </Icon>
                  }
                />
              </div>
              <div className=" flex justify-end p-2">
                <TitleItem
                  content="
              beautyshop@info.com
              "
                  icon={
                    <Icon className=" text-[20px] md:text-2xl ">
                      <MdEmail color="#fff" />
                    </Icon>
                  }
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

          <div className=" pb-5 hidden lg:flex flex-col justify-center items-center flex-1 gap-x-5  ">
            <div className=" w-full flex  flex-1 justify-end pt-10 pb-1">
              <TitleItem
                header="مجوزها"
                content="License"
                icon={
                  <Icon className=" text-[8px] md:text-[15px] ">
                    <FaCircle color="#fcbe13" />
                  </Icon>
                }
              />
            </div>
            <div className="flex flex-row  w-full flex-1 justify-end px-5 gap-x-10 ">
              <img
                src={etemadLogo2}
                className=" w-17 h-15 "
                alt="logo-etemad"
              />
              <img
                src={etemadLogo}
                className=" w-17 h-15  "
                alt="logo-ertemad"
              />
            </div>
          </div>
          <div className="hidden md:flex md:flex-col   w-full  flex-1  justify-center items-center pt-8 p-1 ">
            <div className="w-ful flex justify-end items-center w-full">
              <TitleItem
                header="دانلود اپلیکیشن"
                content="Application Download"
                icon={
                  <Icon className=" text-[8px] md:text-[15px] ">
                    <FaCircle color="#fcbe13" />
                  </Icon>
                }
              />
            </div>
            <div className="w-full flex flex-col  ">
              <div className="pt-2 w-full justify-end flex  gap-x-2">
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
          </div>
        </div>
        <div className="flex flex-col  w-full pt-2 md:hidden ">
          <div className="w-ful flex justify-end  w-full">
            <TitleItem
              header="دانلود اپلیکیشن"
              content="Application Download"
              icon={
                <Icon className=" text-[8px] md:text-[15px] ">
                  <FaCircle color="#fcbe13" />
                </Icon>
              }
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
        <div className="flex md:flex-row flex-wrap  lg:hidden w-full justify-around  items-center pb-2 border-b border-muted">
          <div className=" pb-5 flex  flex-col flex-1 gap-x-5 border-t border-muted ">
            <div className="w-full flex justify-end ">
              <TitleItem
                header="مجوزها"
                content="License"
                icon={
                  <Icon className=" text-[8px] md:text-[15px] ">
                    <FaCircle color="#fcbe13" />
                  </Icon>
                }
              />
            </div>
            <div
              className="flex flex-row  justify-center px-5
            "
            >
              <div className="flex flex-row gap-x-10">
                <img src={etemadLogo2} alt="logo-etemad" />
                <img src={etemadLogo} alt="logo-ertemad" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center  p-2">
          <p className="pt-2 text-light text-sm">
            تمامی حقوق این وبسایت متعلق به فروشگاه پوشاک{" "}
            <span className="font-bold text-l">بیوتی استایل</span> میباشد
          </p>
        </div>
      </div>
    </div>
  );
}
