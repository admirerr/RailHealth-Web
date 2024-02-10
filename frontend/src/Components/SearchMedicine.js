import React from 'react'
import NavbarComponent from './Navbar.js';
const SearchMedicine = () => {
  return (
    <>
      <NavbarComponent />
      <div className="font-semibold px-3  p-5">
        <div className="w-1/2 flex justify-center">
          {" "}
          What are you Looking for ??
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="w-1/2 ">
          <div className="flex">
            <div className="w-3/4">
              <input
                type="text"
                id="medicine"
                name="medicine"
                placeholder="Search medicines/Healthcare products"
                className="mt-1 p-2 w-full  border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="cursor-pointer w-1/4 rounded-lg p-2 bg-blue-200 font-bold text-xl  flex justify-center">
              Search
            </div>
          </div>
        </div>
      </div>

      {/* <> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Search for Medicines/Services
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Discover Relief and Wellness: Explore our comprehensive range of
              quality medicines and healthcare products, carefully curated to
              address your health needs. From trusted brands to expert guidance,
              our platform offers convenience and confidence in every purchase.
              Experience the ease of finding the right remedies and supplements
              tailored to your well-being, all in one place.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  //   src="https://dummyimage.com/720x400"
                  src="https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {/* SUBTITLE */}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Paracetamol
                </h2>
                <p className="leading-relaxed text-base">
                  The Paracetamol tablet is a medication used to relieve fever
                  and pain caused by various conditions such as headache,
                  migraine, muscle aches, period pain.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  //   src="https://dummyimage.com/721x401"
                  src="https://5.imimg.com/data5/SELLER/Default/2022/1/OC/IV/IM/142918085/cipladi.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {/* SUBTITLE */}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Betadine
                </h2>
                <p className="leading-relaxed text-base">
                  Betadine gargle is an antiseptic liquid used to wash throat.
                  Betadine gargle helps relieve sore throat and othe oral
                  infections. It contains povidone-iodine solution.
                 
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  //   src="https://dummyimage.com/722x402"
                  src="https://5.imimg.com/data5/SELLER/Default/2022/1/RD/IK/LC/142511677/500mg-azithromycin-tablets-ip.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {/* SUBTITLE */}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Azithromycin
                </h2>
                <p className="leading-relaxed text-base">
                  Azithral 500 tablet is an antibiotic medicine. It is used to
                  treat various bacterial infections like tonsilitis,
                  pharyngitis, bronchitis, sinusitis, ear inflammation.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  //   src="https://dummyimage.com/723x403"
                  src="https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/wwe91jjts9tri6ouymde.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {/* SUBTITLE */}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Vomikind
                </h2>
                <p className="leading-relaxed text-base">
                  Vomikind syrup is an antiemetic medicine. It is used to
                  control nausea and vomiting in children. It contains
                  ondansetron as an active ingredient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </> */}
    </>
  );
}

export default SearchMedicine