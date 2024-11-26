import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import Snackbar from "@mui/material/Snackbar";

const Contact = ({ setActiveSection }) => {
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [emailjsMessage, setEmailjsMessage] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // how much you have come down
    const divPosition = document.getElementById("contactDiv").offsetTop; // where the div starts (eg. 2000px)

    // check if the amount you have come down is more than the position where the div starts
    if (scrollPosition >= divPosition + 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("contact");
        }
      },
      { threshold: 0.5 } // 50% of the section needs to be visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActiveSection]);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const form = useRef();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateFormData = (name, email, message) => {
    const isEmailValid =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    if (!name?.trim()) return "Name is required!";
    else if (!email) return "Email is required!";
    else if (!message) return "Message is required!";
    else if (!isEmailValid) return "Email is not valid!";
    return null;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // validation
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const message = messageRef?.current?.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    let response;
    response = validateFormData(name, email, message);

    setErrorMessage(response);

    if (response !== null) {
      // entries not valid
      return;
    }

    setEmailjsMessage("Sending...");
    setOpen(true);

    emailjs
      .sendForm(
        "service_vrjh3yb",
        "template_9tuwu5n",
        form.current,
        "HywohMJZW8GEEv3Vg"
      )
      .then(
        () => {
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          setEmailjsMessage("Email sent sucessfully!");
          setOpen(true);
        },
        (error) => {
          setEmailjsMessage("Error : Email not sent!");
          setOpen(true);
        }
      );
  };

  // funtion to open whatsapp
  const openWhataspp = () => {
    const phoneNumber = "+919643418942";
    const message = "Hello, I'm interested in your services!";
    const url = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // function to open gmail
  const openGmail = () => {
    const email = "rajputtushar7102@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <div
      ref={sectionRef}
      id="contact"
      className="px-10 md:px-40 py-20 bg-[#f0f0f0] dark:bg-[#101826] text-[#404040] dark:text-gray-300"
    >
      {/* heading */}
      <div className="mb-5 md:mb-10 text-center">
        <div className="text-4xl mb-2 font-bold text-[#404040] dark:text-transparent dark:bg-gradient-to-r dark:from-[#56B4AC] dark:to-[#a34b74] dark:bg-clip-text dark:animate-gradient">
          Contact Me
        </div>
        <div className="text-xs">Get in touch</div>
      </div>
      {/* containers */}
      <div
        id="contactDiv"
        className={`md:flex transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* left container */}
        <div className="w-full md:w-1/2 text-center flex flex-col items-center gap-4">
          <div className="text-xl font-semibold">Talk to me</div>
          {/* cards */}
          <div
            onClick={openGmail}
            className="w-60 h-fit p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg dark:border-gray-600 cursor-pointer"
          >
            <span>
              <EmailOutlinedIcon />
            </span>
            <span className="text-base font-bold">Email</span>
            <span className="text-sm font-light">
              tusharrajput2002@gmail.com
            </span>
            <span className="text-sm font-light my-2">
              Write me
              <ArrowRightAltIcon fontSize="small" />
            </span>
          </div>
          <div
            onClick={openWhataspp}
            className="w-60 h-fit p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg dark:border-gray-600 cursor-pointer"
          >
            <span>
              <WhatsAppIcon />
            </span>
            <span className="text-base font-bold">Whatsapp</span>
            <span className="text-sm font-light">+91 964-341-8942</span>
            <span className="text-sm font-light my-2">
              Write me
              <ArrowRightAltIcon fontSize="small" />
            </span>
          </div>
          <a href="https://www.linkedin.com/in/tusharrajput71/" target="_blank">
            <div className="w-60 h-fit p-2 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg dark:border-gray-600 cursor-pointer">
              <span>
                <LinkedInIcon />
              </span>
              <span className="text-base font-bold">LinkedIn</span>
              <span className="text-sm font-light">
                www.linkedin.com/in/tusharrajput71
              </span>
              <span className="text-sm font-light my-2">
                Write me
                <ArrowRightAltIcon fontSize="small" />
              </span>
            </div>
          </a>
        </div>
        {/* right container */}
        <div className="w-full md:w-1/2 flex flex-col mt-10 md:mt-0 items-center gap-4">
          <div className="text-xl font-semibold">Write me a mail</div>
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="w-full relative">
              <input
                ref={nameRef}
                name="user_name"
                placeholder="your name"
                className="bg-transparent border-2 border-gray-300 dark:border-gray-700 shadow-md rounded-md w-full p-4 mb-4"
              />
              <span className="absolute -top-2 left-3 bg-[#f0f0f0] dark:bg-[#101826] text-xs text-gray-500 dark:text-gray-400 px-1">
                Name *
              </span>
            </div>
            <div className="w-full relative">
              <input
                ref={emailRef}
                name="user_email"
                placeholder="your email"
                className="bg-transparent border-2 border-gray-300 dark:border-gray-700 shadow-md rounded-md w-full p-4 mb-4"
              />
              <span className="absolute -top-2 left-3 bg-[#f0f0f0] dark:bg-[#101826] text-xs text-gray-500 dark:text-gray-400 px-1">
                Mail *
              </span>
            </div>
            <div className="w-full relative">
              <textarea
                rows={5}
                ref={messageRef}
                name="message"
                placeholder="write your message..."
                className="bg-transparent border-2 border-gray-300 dark:border-gray-700 shadow-md rounded-md w-full p-4"
              />
              <span className="absolute -top-2 left-3 bg-[#f0f0f0] dark:bg-[#101826] text-xs text-gray-500 dark:text-gray-400 px-1">
                Message *
              </span>
            </div>
            <div className="h-8 pb-2">
              <p className="text-sm text-red-600 self-start pl-2">
                {errorMessage}
              </p>
            </div>

            <button
              type="submit"
              className="bg-[#404040] text-white text-sm md:text-lg mx-auto w-full rounded-lg cursor-pointer hover:shadow-lg dark:bg-gradient-to-r  dark:from-[#56B4AC] dark:to-[#7728a4] dark:text-white dark:animate-gradient"
            >
              <div className="px-3 py-4 flex justify-center items-center hover:scale-[90%] transition-all duration-150 ease-in-out">
                Send Message
                <SendIcon className="-rotate-45 ml-2 pb-1" />
              </div>
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={emailjsMessage}
        ContentProps={{
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
    </div>
  );
};

export default Contact;
