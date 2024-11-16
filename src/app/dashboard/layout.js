export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="apple-touch-icon" sizes="76x76" href="@/assets/img/apple-icon.png" />
                <link rel="icon" type="image/png" href="@/assets/img/favicon.png" />
                <title>
                    Argon Dashboard 3 by Creative Tim
                </title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                <link href="https://demos.creative-tim.com/argon-dashboard-pro/assets/css/nucleo-icons.css" rel="stylesheet" />
                <link href="https://demos.creative-tim.com/argon-dashboard-pro/assets/css/nucleo-svg.css" rel="stylesheet" />
                <link id="pagestyle" href="../assets/css/argon-dashboard.css?v=2.1.0" rel="stylesheet" />
            </head>
            <body>
                {children}
            </body>
            <script src="@/assets/js/core/popper.min.js"></script>
            <script src="@/assets/js/core/bootstrap.min.js"></script>
            <script src="@/assets/js/plugins/perfect-scrollbar.min.js"></script>
            <script src="@/assets/js/plugins/smooth-scrollbar.min.js"></script>
            <script src="@/assets/js/plugins/chartjs.min.js"></script>
            <script src="@/assets/js/argon-dashboard.min.js?v=2.1.0"></script>
        </html>
    );
}