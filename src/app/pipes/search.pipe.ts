import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchTerm: string) {
    const result: any[] = value.filter((search) => {
      return search.name ? search.name.toLowerCase().includes(searchTerm.toLowerCase()) : search.title ? search.title.toLowerCase().includes(searchTerm.toLowerCase()) : search.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    })

    if (!value || searchTerm === '') {
      return value
    } else {
      return result
    }
  }

}
