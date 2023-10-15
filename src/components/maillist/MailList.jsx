

const MailList = () => {
  return (
    <div className=" w-fit m-auto text-white mb-10 font-mono ">
     <div className="flex flex-col gap-2 items-center">
     <h1 className="text-xl">Save time, save money!</h1>
      <span className="">
        Sign up and we'll send the best deals to you
      </span>
      <div className=" flex gap-2 w-full">
      <input   name="email"  class="  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                 
      <button   class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">send</button>
                
      </div>
     </div>
    </div>
  );
};

export default MailList;
