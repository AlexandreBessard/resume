

export class ProjectModel {

  detail: ProjectDetail | undefined;

  constructor(
    public id: string,
    public name: string,
    detail: ProjectDetail
  ) {
    this.detail = detail;
  }
}

export class ProjectDetail {

  constructor(
    public description: string
  ) {
  }

}

