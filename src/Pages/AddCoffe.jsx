import React from 'react';
import { Link } from 'react-router';

const AddCoffe = () => {
    return (
        <div>

            <div className='mx-auto w-[70%]'>
               <Link to='/'> <button className='btn mt-5'>Back to Home</button></Link>

                <div className='bg-[#F4F3F0] px-4 py-4 mt-8'>
                    <h2 className='text-center text-3xl font-medium'>Add New Coffee</h2>
                    <p className='text-center py-3'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />

                                <label className="label mt-4">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full" />

                                <label className="label mt-4">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />

                                <label className="label mt-4">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full" />

                                <label className="label mt-4">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />

                                <label className="label mt-4">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="btn btn-block bg-[#D2B48C] text-black border border-black hover:bg-[#c2a878]">
                                Add Coffee
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default AddCoffe;