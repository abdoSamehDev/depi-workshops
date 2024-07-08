const tracks = [
  {
    id: 1,
    name: "Keynote",
    speaker: "Dr. Jane Smith",
    time: "9:00 AM - 10:00 AM",
    room: "Main Hall",
  },
  {
    id: 2,
    name: "Web Development",
    speaker: "Alice Johnson",
    time: "11:00 AM - 12:00 PM",
    room: "Room A",
  },
  {
    id: 3,
    name: "Data Science",
    speaker: "Charlie Green",
    time: "11:00 AM - 12:00 PM",
    room: "Room B",
  },
  {
    id: 4,
    name: "Cloud Computing",
    speaker: "Eva Black",
    time: "11:00 AM - 12:00 PM",
    room: "Room C",
  },
];

$(document).ready(function () {
  tracks.forEach((track) => {
    $(".content").append(
      `<div class="card" id=${track.id}>
      <h3>Track Name: ${track.name}</h3>
      <p>Speaker: ${track.speaker}</p>
      <p>Time: ${track.time}</p>
      <p>Room: ${track.room}</p>
      </div>`
    );
  });
});
