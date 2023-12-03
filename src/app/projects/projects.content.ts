import {ProjectDetail, ProjectModel} from './project.model';

export class ProjectsContent {

  static readonly projectsContent: ProjectModel[] = [

    new ProjectModel("1", "CRUD application", "https://github.com/AlexandreBessard/crud-application", "imgUrl", "https://alexandrebessard.github.io/crud-application",
      new ProjectDetail(
        "<h4>Employee Management:</h4>\n" +
        "    <ul>\n" +
        "        <li>Users can view a list of employees and perform CRUD operations on them.</li>\n" +
        "        <li>The application provides functionality to add new employees, modify existing employee details, and delete employee records.</li>\n" +
        "    </ul>\n" +
        "\n" +
        "    <h4>Filtering Results:</h4>\n" +
        "    <ul>\n" +
        "        <li>Users have the ability to filter the displayed results based on certain criteria.</li>\n" +
        "        <li>This feature enhances the user experience by allowing them to focus on specific subsets of employee records.</li>\n" +
        "    </ul>\n" +
        "\n" +
        "    <h4>In-Memory Database:</h4>\n" +
        "    <ul>\n" +
        "        <li>The project utilizes an in-memory database, providing a lightweight and efficient way to store and manage employee data.</li>\n" +
        "        <li>Angular's InMemoryWebApiModule, coupled with the specified InMemoryDataService, simulates a server and database environment within the client application.</li>\n" +
        "    </ul>\n" +
        "\n" +
        "    <h4>Angular Modules and Material UI Components:</h4>\n" +
        "    <ul>\n" +
        "        <li>The project uses various Angular modules to organize and structure the application.</li>\n" +
        "        <li>Material UI components, such as MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule, and MatSnackBarModule, contribute to a visually appealing and responsive user interface.</li>\n" +
        "    </ul>\n" +
        "\n" +
        "    <h4>Additional Dependencies:</h4>\n" +
        "    <ul>\n" +
        "        <li>ReactiveFormsModule and HttpClientModule are included for form handling and making HTTP requests, respectively.</li>\n" +
        "        <li>The delay of 500 milliseconds in the InMemoryWebApiModule is set to simulate network latency, providing a more realistic experience when interacting with the in-memory database.</li>\n" +
        "    </ul>\n" +
        "\n" +
        "    <p>By combining Angular's powerful framework with Material UI components, the \"crud-application\" project offers a robust solution for managing employee data with an intuitive and aesthetically pleasing user interface." +
        " This project can be tested locally easely.</p>",
        ["Java", "Angular"],
        "The \"crud-application\" project is an employee management web app featuring CRUD operations, filtering, and an in-memory database. "),
      ),


    new ProjectModel("2", "Project in progress...", "", "", "",
      new ProjectDetail("In progress, come back later...",
        ["Java", "Angular"],
      ""))
  ];

}
