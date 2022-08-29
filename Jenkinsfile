@Library('jenkins-utils')

def k8s_contexts = [
    "cst2": "cst2",
    "cst3": "cst3",
    "cst4": "cst4"
]
pipeline {
    agent any

    stages {
        stage('printing shell') {
            steps {
                echo "Building.. $k8s_context"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}