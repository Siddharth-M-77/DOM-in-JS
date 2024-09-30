


var people = document.querySelector(".people");
var input = document.querySelector("input");

var data = [
  {
    name: "swati",
    src: "https://images.unsplash.com/photo-1709038459415-8379ce8ae789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rohini",
    src: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    name: "ankita",
    src: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    name: "anaamika",
    src: "https://images.unsplash.com/photo-1611042553365-9b101441c135?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    name: "harshita",
    src: "https://plus.unsplash.com/premium_photo-1664267831560-1e97e0b1cae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    name: "shreya",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    name: "priya",
    src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "priyanka",
    src: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "swashtik",
    src: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "monika",
    src: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Gopi",
    src: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

// Render all people initially
function renderPeople(peopleArray) {
  var html = "";
  peopleArray.forEach((person)=> {
    html += `
      <div class="person">
        <div class="img">
          <img src="${person.src}" alt="">
        </div>
        <h4>${person.name}</h4>
      </div>`;
  });
  people.innerHTML = html;
}

// Filter people based on input value
function filterPeople() {
  var inputValue = input.value.toLowerCase();
  var filteredPeople = data.filter(function (person) {
    return person.name.toLowerCase().startsWith(inputValue);
  });
  renderPeople(filteredPeople);
}

// Initial rendering of all people
renderPeople(data);

// Event listener for input change
input.addEventListener("input", filterPeople);
