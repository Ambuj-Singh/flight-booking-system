import React from "react";
import Title from "../components/title";
import '../App.css';
const Home = () => {
    return(
        <div >
        <Title
        param='Flyaway'/>
            	<div className="home" class="rounded bg-white max-w-md rounded overflow-hidden shadow-xl p-5">

        <form className="space-y-4" action="#" method="GET">
        
        <div class="rounded-md shadow-sm -space-y-px">
        <div class="grid gap-6">
							<div class="col-span-12">
                         
						<input id="From" name="from" type="text" autocomplete="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="From"/>
					</div>
                    <div class="col-span-12">
                   
						<input id="To" name="to" type="text" autocomplete="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="To"/>
					</div>
				</div>
                <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 Search
                </button>
                </div>
            </div>
        </form>
    </div>
 </div>  
        
    );
};

export default Home;