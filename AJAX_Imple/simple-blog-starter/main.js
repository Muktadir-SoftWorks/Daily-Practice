// Modal functions
function openModal(postId) {
    const modal = document.getElementById('postModal');
    if (modal) {
        document.body.classList.add('modal-open');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeModal() {
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
}

// Close modal when clicking outside
document.getElementById('postModal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});


 //category filter

 function CategorySelect(id){
fetch(
    `https://basic-blog.teamrabbil.com/api/post-list/${id}`
).then((response)=>response.json())
.then((data)=>{
    postList.innerHTML=""
    data.forEach(element =>{
        postList.innerHTML +=`
         <article
                        class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                        <div class="relative overflow-hidden">
                            <img src=${element.img} alt="Post Title"
                                class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute top-4 left-4">
                                <span
                                    class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-purple-600 text-sm font-semibold">
                                   Technology
                                </span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                 ${element.title}
                            </h3>
                            <p class="text-gray-600 mb-4 line-clamp-2">
                            ${element.short}
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Dec 15, 2024</span>
                                <button onclick="openModal('post-1')"
                                    class="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 transition-colors">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    </article>`
    })
})

 }
 const filterCategory = document.querySelector("#CategoryButtons");
 const categories = ["Sports","Technology","Art","Books","Games"]

 fetch(
    "https://basic-blog.teamrabbil.com/api/post-categories"
 )
 .then((resposne)=>resposne.json())
 .then((data)=>{
    console.log(data)

    data.forEach(element => {
        filterCategory.innerHTML += `
                            <button
                            onclick = "CategorySelect(${element.id})"
                                class="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-200 transition-all text-sm sm:text-base whitespace-nowrap">
                                ${element.name}
                            </button>`
    });
    
 })

 const postList = document.querySelector("#postList")
 fetch(
    "https://basic-blog.teamrabbil.com/api/post-newest"
 )
 .then((response)=>response.json())
 .then((data)=>{
    console.log(data)

    postList.innerHTML=""
    data.forEach(element =>{
        postList.innerHTML +=`
         <article
                        class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                        <div class="relative overflow-hidden">
                            <img src=${element.img} alt="Post Title"
                                class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300">
                            <div class="absolute top-4 left-4">
                                <span
                                    class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-purple-600 text-sm font-semibold">
                                   Technology
                                </span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                 ${element.title}
                            </h3>
                            <p class="text-gray-600 mb-4 line-clamp-2">
                            ${element.short}
                            </p>
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-gray-500">Dec 15, 2024</span>
                                <button onclick="openModal('post-1')"
                                    class="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 transition-colors">
                                    Read more →
                                </button>
                            </div>
                        </div>
                    </article>`
    })
 })



