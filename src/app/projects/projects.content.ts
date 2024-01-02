import {ProjectDetail, ProjectModel} from './project.model';

export class ProjectsContent {

  static readonly projectsContent: ProjectModel[] = [

    new ProjectModel("1", "CRUD application with Angular",
      "https://github.com/AlexandreBessard/crud-application",
      "imgUrl",
      "https://alexandrebessard.github.io/crud-application",
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


    new ProjectModel("2", "Full Stack Web App with Java, Spring and Angular",
      "https://github.com/AlexandreBessard/fullstack-app-using-java-angular",
      "",
      "https://crud-demo-f0c69e71d3bb.herokuapp.com/",
      new ProjectDetail("<h1>Your Web Application</h1>\n" +
        "    <p>Full Stack web application built with Angular and Spring Boot! Once an existing user is successfully logged in, " +
        "you can do CRUD operations. The state is persisted in PostgreSQL database.</p>\n" +
        "\n" +
        "    <h2>Login Page</h2>\n" +
        "    <p>Access the app by logging in with the following credentials using <em>Incognito mode</em>:</p>\n" +
        "    <ul>\n" +
        "        <li><strong>Username:</strong> admin</li>\n" +
        "        <li><strong>Password:</strong> admin</li>\n" +
        "    </ul>\n" +
        "\n" +
        "    <h2>Registration</h2>\n" +
        "    <p>If you want to use another account, you can register a new one by clicking on the 'Register' button from the Logging page.</p>\n" +
        "\n" +
        "    <h2>Dashboard</h2>\n" +
        "    <p>Once logged in, you'll have access to the dashboard where you can manage users by saving, deleting, or updating user information.</p>\n" +
        "\n" +
        "    <h2>JWT Token</h2>\n" +
        "    <p>The login page provides a valid JWT token to protect routes and applies API authentication.</p>\n" +
        "\n" +
        "    <h2>Deployment</h2>\n" +
        "    <p>The application is packaged using Maven as one executable JAR file, and it is deployed on Heroku. This allows you to build and run the app in the cloud. The app uses a PostgreSQL database to save the state, ensuring data persistence even after signing out.</p>\n" +
        "<h3>Application architecture:</h3>" +
        "<p>The application leverages a robust architectural structure, employing PostgreSQL as the database, which is hosted on Heroku. The client-side is developed using Angular, while the server-side components, including the Controller, Service, and Model, are powered by Spring Boot:</p>\n" +
        "<img src=\"assets/projects/id2/architecture.png\" alt=\"Your Image Description\">\n",
        ["Java", "Angular"],
      "This web application is designed with a clean and user-friendly interface. The main components include a Login Page, Registration functionality, a Dashboard for user management utilizing NGRX for state management, and features to secure routes using JWT tokens and API authentication hosted on Heroku cloud provider."))
  ];

}
