// Реалізуйте систему бронювання номерів у готелі. Вона повинна дозволяти створювати номери, бронювати номери і виводити інформацію про заброньовані номери. Використовуйте правильне прив'язування контексту this в методах класу.

// Підказка:

// Використовуй bind, call, або apply для прив'язування контексту.
class Hotel {
  constructor() {
    this.rooms = [];
  }

  createRoom(roomNumber) {
    this.rooms.push({
      roomNumber,
      isBooked: false,
    });
    console.log(`Room ${roomNumber} created`);
  }

  bookRoom(roomNumber) {
    const room = this.rooms.find((room) => room.roomNumber === roomNumber);
    if (room) {
      if (!room.isBooked) {
        room.isBooked = true;
        console.log(`Room ${roomNumber} has been booked`);
      } else {
        console.log(`Room ${roomNumber} is already booked`);
      }
    } else {
      console.log(`Room ${roomNumber} does not exist.`);
    }
  }

  getBookedRooms() {
    const bookedRooms = this.rooms.filter((room) => room.isBooked);
    if (bookedRooms.length > 0) {
      const bookedRoom = bookedRooms.map((room) => room.roomNumber).join(", ");
      console.log(`Booked rooms: ${bookedRoom}`);
    } else {
      console.log("No rooms are currently booked");
    }
  }
}

const hotel = new Hotel();
hotel.createRoom(17);
hotel.createRoom(25);
hotel.createRoom(19);
hotel.createRoom(110);

hotel.bookRoom(25);
hotel.bookRoom(115);
hotel.bookRoom(19);

hotel.getBookedRooms();
