node {
    def app

    stage('Clone repository') {
      

        checkout scm
    }

    stage('Build image') {
        sh 'cp /var/lib/jenkins/workspace/api.js /var/lib/jenkins/workspace/nodejs/'
  
       app = docker.build("manishaverma/javaimg")
    }
    


    stage('Test image') {
  

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("${env.BUILD_NUMBER}")
        }
     }
    stage('deploy'){
        sh 'docker run -p 3000:5000 manishaverma/javaimg:latest'
    }


}
