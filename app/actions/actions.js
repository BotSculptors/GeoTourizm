export const select =(tour) =>{
  alert(tour.tour_name);
  return{
    type: "TOUR_SELECTED",
    payload: tour
  }
};
