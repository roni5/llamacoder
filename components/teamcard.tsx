'use client'

export default function TeamCard() {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100"
    >
     
      <div
        className="mb-8 bg-cover"
        style={{
      backgroundImage: "url(&quot;https://cdn.tailkit.com/media/placeholders/photo-JgOeRuGD_Y4-800x400.jpg&quot;)"
    }}
      >
        <div className="flex h-32 items-end justify-center">
          <div className="-mb-12 rounded-full bg-gray-200/50 p-2 dark:bg-gray-600/50">
            <img
              src="https://gravatar.com/userimage/232443662/4fc80daf1594550f518eef87fb816d8f.jpeg?size=256&cache=1735846999851"
              alt="User Avatar"
              className="inline-block size-20 rounded-full"
            />
          </div>
        </div>
      </div>
    


      <div className="grow p-5 text-center">
        <h3 className="mb-1 mt-3 text-lg font-semibold">Ronald McGuinness</h3>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Web Developer ∙ 12 Projects
        </p>
      </div>
   
    </div>
  )
}
   