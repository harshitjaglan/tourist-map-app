pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    // Runs Maven build (including tests)
                    sh "mvn clean install"
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    // Install dependencies and build
                    sh "npm install"
                    sh "npm run build"
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                // Archive the Spring Boot JAR file
                archiveArtifacts artifacts: 'backend/target/*.jar', fingerprint: true
                // Archive the frontend production build
                archiveArtifacts artifacts: 'frontend/dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
