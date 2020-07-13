import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1 className="uppercase mt-10 text-xl text-gray-700 text-center">Contact us</h1>
            <div className="container p-12 md:p-16 bg-blue-100 sm:max-w-lg md:max-w-4xl lg:w-full mx-auto mt-10">
                <form>
                    <div className="md:flex justify-between">
                        <div className="mb-4 md:w-1/2 md:mr-6">
                            <label class="block text-gray-700 text-sm mb-2" for="username">Username</label>
                            <input class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4 md:w-1/2 md:ml-6">
                            <label class="block text-gray-700 text-sm mb-2" for="email">Email</label>
                            <input class=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-700 text-sm mb-2" for="message">Message</label>
                        <textarea rows="5" className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Type your message here"/>
                    </div>
                    <div className="flex mt-4 justify-end">
                        <button className="w-full md:w-auto shadow bg-primary hover:bg-secondary focus:shadow-outline focus:outline-none text-white py-2 px-8 rounded" type="button"> Sign in </button>
                    </div>
                </form>
            </div>
        </div>
    );
}