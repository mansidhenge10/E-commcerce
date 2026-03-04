import React from "react";

const OurStory = () => {
  return (
    <section className="min-h-screen bg-white py-12 px-4 md:px-12">
        
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h1>
        <p className="text-lg text-gray-600 mb-10">
          At <span className="font-semibold text-black">Urban Vogue</span>, fashion is more than clothing — it's a lifestyle.
          From humble beginnings to a growing community of trendsetters, we've stayed committed
          to curating style, confidence, and self-expression.
        </p>

        {/* 🔥 Show Your Work / Projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Work Item 1 */}
          <div className="bg-[#FFF5E5] p-6 rounded-lg shadow-md">
            <img
              src="src//assets/work1.jpg"
              alt="Work 1"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Handpicked Collections</h3>
            <p className="text-gray-600 text-sm">
              Carefully curated pieces to match modern style, culture, and comfort.
            </p>
          </div>

          {/* Work Item 2 */}
          <div className="bg-[#FFF5E5] p-6 rounded-lg shadow-md">
            <img
              src="/src/assets/work2.jpg"
              alt="Work 2"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Fashion</h3>
            <p className="text-gray-600 text-sm">
              We embrace eco-friendly processes and conscious design to create fashion with impact.
            </p>
          </div>

          {/* Work Item 3 */}
          <div className="bg-[#FFF5E5] p-6 rounded-lg shadow-md">
            <img
              src="src/assets/work3.jpg"
              alt="Work 3"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Focus</h3>
            <p className="text-gray-600 text-sm">
              From collaborations with artists to giving back — community is at the heart of what we do.
            </p>
          </div>
        </div>
      </div>
<div className="mt-20">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Behind the Scenes</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div>
      <h4 className="text-lg font-medium text-gray-700 mb-2">Design Studio</h4>
      <img src="src/assets/behind1.jpg" alt="Behind the scenes" className="rounded shadow-md w-full h-52 object-cover" />
    </div>
    <div>
      <h4 className="text-lg font-medium text-gray-700 mb-2">Photoshoot Moments</h4>
      <img src="src/assets/behind2.jpg" alt="Behind the scenes" className="rounded shadow-md w-full h-52 object-cover" />
    </div>
    <div>
      <h4 className="text-lg font-medium text-gray-700 mb-2">Styled, Packed, Delivered</h4>
      <img src="src/assets/behind3.jpg" alt="Behind the scenes" className="rounded shadow-md w-full h-52 object-cover" />
    </div>
  </div>
</div>
<div className="mt-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-0">
  {/* Text on the Left */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Inside SwagBerry</h2>
    <p className="text-lg text-gray-600 mb-4">
      Go behind the scenes to see how passion and precision shape every piece. From design boards to delivery, 
      our process is driven by creativity, sustainability, and quality.
    </p>
    <p className="text-md text-gray-500">
      This glimpse into our workspace showcases the energy, collaboration, and attention to detail that make 
      Urban Vogue what it is today.
    </p>
  </div>

  {/* Video on the Right */}
<div className="w-full max-w-[500px]">
  <video
    controls
    className="w-full aspect-[4/3] rounded-xl shadow-lg object-cover"
  >
    <source src="/src/assets/behindvideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


</div>

      {/* what our customers says  */}
      <div className="mt-20 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-white border p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic">
        “Urban Vogue redefined my style. Their collection is classy, comfortable, and full of personality.”
      </p>
      <h4 className="mt-4 font-semibold text-black">– Aisha R., Mumbai</h4>
    </div>
    <div className="bg-white border p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic">
        “I love how the designs blend modern trends with tradition. It feels like it was made for me.”
      </p>
      <h4 className="mt-4 font-semibold text-black">– Rohan K., Delhi</h4>
    </div>
    <div className="bg-white border p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic">
        “Their commitment to sustainability and fashion is what made me a loyal customer.”
      </p>
      <h4 className="mt-4 font-semibold text-black">– Meera S., Pune</h4>
    </div>
  </div>
</div>

    </section>
  );
};

export default OurStory;
