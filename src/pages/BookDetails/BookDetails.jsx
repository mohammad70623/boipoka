import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id}=useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    
    const {bookName, image,rating,tags, author, category,publisher,review, totalPages, yearOfPublishing} = singleBook;

    return (
        <div className='max-w-6xl mx-auto my-10 p-6 border border-gray-200 flex flex-col md:flex-row gap-8 items-start'>
            <div className='h-[380px] md:w-4/5 bg-gray-100 rounded-xl p-8 flex justify-center'>
                <img  src={image} alt="" />
            </div>

            <div>
                <h2 className="text-3xl font-bold text-black-900 mb-2">{bookName}</h2>
                <p className="text-gray-600 text-lg font-medium">By : {author}</p>

                <hr className="my-3 border-gray-200" />
                <p className="text-gray-600 font-medium">{category}</p>
                <hr className="my-3 border-gray-200" />

                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    <span className="font-bold text-black-900">Review : </span>{review}
                </p>
                <div className="flex items-center gap-3 mb-6">
                <span className="font-bold text-gray-900 text-sm">Tag</span>
                {
                    tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className="bg-[#23BE0A]/5 text-[#23BE0A] px-4 py-1.5 rounded-full text-sm font-medium"
                        >
                            #{tag}
                        </span>
                    ))
                }
            </div>

                <div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-1/2">Number of Pages:</span>
                        <span className="font-bold text-black-900 w-1/2">{totalPages}</span>
                    </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-1/2">Publisher:</span>
                        <span className="font-bold text-black-900 w-1/2">{publisher}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-1/2">Year of Publishing:</span>
                        <span className="font-bold text-black-900 w-1/2">{yearOfPublishing}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-1/2">Rating:</span>
                        <span className="font-bold text-black-900 w-1/2">{rating}</span>
                    
                    </div>
                </div>

            <div className="flex gap-4 mt-auto">
                    <button className="px-6 py-2.5 border border-gray-300 rounded-lg font-bold text-sm bg-white hover:bg-gray-50 text-gray-900 transition-colors">
                        Read
                    </button>
                    <button className="px-6 py-2.5 bg-[#50B1C9] hover:bg-[#409eb5] text-white rounded-lg font-bold text-sm transition-colors">
                        Wishlist
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;