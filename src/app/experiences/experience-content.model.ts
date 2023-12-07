
export class ExperienceContentModel {

  constructor(public id: number,
              public title: string,
              public date: string,
              public companyTitle: string,
              public description: { key: string, value: string }[],
              public companyLogo: string,
              public country?: string,
              public city?:string,
              public imgCountry?: string,
              public skills?: string[]) {
  }
}
