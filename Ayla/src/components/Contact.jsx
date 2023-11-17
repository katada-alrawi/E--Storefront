import React from "react";

function Contact() {
    return (
        <div id="contact" className="max-w-[1040] m-auto md:pl-20 p-47 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
                Contact
            </h1>

            <form action="" method="POST" encType="multipart/form-data">
                <div className="grid md:grid-color-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-3">Name</label>
                        <input
                            className=" border-2 rounded-lg p-3 flex border-gray-400"
                            type="text"
                            name="name"
                        />
                    </div>
                    
                </div>
                <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-3">Phone Number</label>
                        <input
                            className=" border-2 rounded-lg p-3 flex border-gray-400"
                            type="text"
                            name="phone"
                        />
                    </div>
                
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input  className=" border-2 rounded-lg p-3 flex border-gray-400" type="email" name="email" />
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input  className=" border-2 rounded-lg p-3 flex border-gray-400" type="text" name="subject" />
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea  className=" border-2 rounded-lg p-3 flex border-gray-400" rows="10" name="Message"></textarea>
                </div>
                <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">Send Me</button>
            </form>
        </div>
    );
}

export default Contact;
