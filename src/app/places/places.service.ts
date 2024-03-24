import { Injectable } from '@angular/core';
import { Places } from './places.modal';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor() { }

  getAllPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  private places: Places[] = [
    {
      id: 'p1',
      title: 'Black Sand Beach',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/0*QNkzFqnKdlZGsX7s.jpg',
      book: [],
    },
    {
      id: 'p2',
      title: 'Carnival',
      imageUrl: 'https://armatureworks.com/wp-content/uploads/sites/2/2023/10/carnival.jpeg',
      book: [],
    },
    {
      id: 'p3',
      title: 'Cruise',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Carnival_Radiance_in_Ensenada_2023.jpg',
      book: [],
    },
    {
      id: 'p4',
      title: 'Skii Resort',
      imageUrl: 'https://assets.vogue.com/photos/63b883bdf8989f4ae6ba680e/master/w_2560%2Cc_limit/GettyImages-502757710.jpg',
      book: [],
    },
  ];
}