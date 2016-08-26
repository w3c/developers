(function() {

    var projectsList = document.getElementById('projects-list');

    function get(url, callback) {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            console.log('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = callback;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
            } else {
                alert('There was a problem with the request.');
            }
        }
    }

    window.onload = function() {

        var projects = {};

        get('http://localhost:3000/projects', function(){

            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {

                    document.getElementById('loading').style.display = 'none';

                    projects = JSON.parse(httpRequest.responseText);

                    for(project in projects) {

                        projectsList.innerHTML += '<li class="project col-md-6">'
                        + '<div class="col-md-6">'
                        + '<h3><a href="' + projects[project]['github_url'] + '">' + project + '</a></h3>'
                        + '<p class="project-description">' + projects[project]['description'] + '</p>'
                        + '<p class="call-to-action">'
                        + '<a class="action1" href="' + projects[project]['github_url'] + '"> Github </a>'
                        + '<a class="action2" href="' + projects[project]['website_url'] + '"> Website </a>'
                        + '</p>'
                        + '</div>'
                        + '<ul class="project-data col-md-6">'
                        + '<li><span class="octicon octicon-calendar"></span> Created on ' + projects[project]['created_on'].split('T')[0] + ' </li>'
                        + '<li><span class="octicon octicon-watch"></span> Last commit on ' + projects[project]['last_commit_on'].split('T')[0] + ' </li>'
                        + '<li><span class="octicon octicon-issue-opened"></span> ' + projects[project]['opened_issues'] + ' opened issues</li>'
                        + '<li><span class="octicon octicon-git-pull-request"></span> ' + projects[project]["pending_pull_requests"] + ' pull requests pending</li>'
                        + '<li><span class="octicon octicon-tag"></span> Release ' + projects[project]["last_release"] + ' </li>'
                        + '<li><span class="octicon octicon-organization"></span> ' + projects[project]["contributors"] + ' contributors</li>'
                        + '</ul>'
                        + '</li>';

                        console.log(projects[project]);

                    }

                } else {
                    console.log('something went wrong with the request');
                }
            }
        });

    };

})();
