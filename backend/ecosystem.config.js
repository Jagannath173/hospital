module.exports = {
    apps: [{
        name: "hospital-management-system",
        script: "server.js",
        instances: "max",
        exec_mode: "cluster",
        env: {
            NODE_ENV: "development"
        },
        env_production: {
            NODE_ENV: "production"
        }
    }],
    deploy: {
        production: {
            user: "ubuntu",
            host: "13.60.63.251",
            ref: "origin/main",
            repo: "git@github.com:Jagannath173/hospital.git",
            path: "/var/www/hospital-management-system",
            "post-deploy":
                "npm install && pm2 reload ecosystem.config.js --env production",

        }
    }
};