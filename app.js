
var app = new Vue({
    el: "#app",
    data: {
        currentUser: '',
        email: '',
        password: '',
        userMessage: '',
        userType: '',
        courses: [],
        users: [],
        'term': '',
        response: '',
        provider: '',
        topic: '',
        location: '',
        price: '',
        time: '',
        id: '',
        newTopic: '',
        newLocation: '',

        newPrice: '',
        newTime: '',
        deleteId: '',
        lesson:courses
    },
    methods: {
        signup: function () {
            var data = { email: this.email, password: this.password, userType: this.userType }

            fetch('http://localhost:3000/collections/users', {
                method: 'post', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    alert("registered")
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },

        signin: function () {


            var newEmail = this.email;
            var newPassword = this.password;
            if (this.users.some(function (user) { return (user.email === newEmail && user.password === newPassword && user.userType === 'student') })) {
                alert("loggedin")
                this.currentUser = this.email
            }
            else if (this.users.some(function (user) { return (user.email === newEmail && user.password === newPassword && user.userType === 'provider') })) {
                alert('loggedin')
                this.provider = this.email;
            }
        },

        signout: function () {

            this.currentUser = '';
            this.email = '';
            this.password = '';
            this.provider = '';
        },
        addService: function () {
            var data = { topic: this.topic, location: this.location, price: this.price, time: this.time, email: this.email }

            fetch('http://localhost:3000/collections/courses', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    alert("added")
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        },
        update: function () {
            var id = this.id;
            var data = { topic: this.newTopic, location: this.newLocation, price: this.newPrice, time: this.newTime }


            fetch(`http://localhost:3000/collections/courses/${id}`, {
                method: 'Put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    alert("updated")
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
        deleteCourse: function () {
            var deleteId = this.deleteId;
            fetch(`http://localhost:3000/collections/courses/${deleteId}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },

            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    alert("updated")
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }



    }

    ,
    computed: {
        results: function () {
            return this.courses.filter(course =>
                course.topic.includes(this.term)
            )
        },
        providerCourse: function () {
            newEmail = this.email
            return this.courses.filter(function (course) {
                if (course.email === newEmail) {
                    return course.topic
                }
            })

        }

    }
})
fetch('http://localhost:3000/collections/courses')

    .then(response => {

        return response.json();
    })


    .then(response => {
        // alert(response);
        app.courses = response;
    }).catch(function (err) {
        console.log('Fetch problem: ' + err.message);
    })

fetch('http://localhost:3000/collections/users')

    .then(response => {

        return response.json();
    })


    .then(response => {
        // alert(response);
        app.users = response;
    }).catch(function (err) {
        console.log('Fetch problem: ' + err.message);
    })


    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    };



  
                        
    