# HelpDesk bot

Bot can be used by calling to [+358454907878](tel:+358454907878). Building with CSC's Rahti is super easy and fun, it's even free of charge for [students](https://docs.csc.fi/accounts/how-to-create-new-project/#student). 

The bot uses Twilio and node.js and is deployed on CSC's [Rahti](https://docs.csc.fi/cloud/rahti/) PaaS. The Docker boilerplate was taken from repo *rahti2-docker-node* of user *fw-teaching* at github.com. 

## Route

The bot responses at https://dev-ops-projekt-arcada-devops.2.rahtiapp.fi/bot.

## For local real-time development

Rename `.env-example` to `.env` to override the `MODE=production` set in the `Dockerfile`. Note that this needs a valueless declaration of `MODE` in `docker-compose.yml`

To run the container locally:
`docker compose up --build`

### For deployment to Rahti 

Note: Currently, CRC Rahti deployment needs manual work in the [web UI](https://rahti.csc.fi/)! After every build, go into Topology-view and right-click on three dots next to your Deployment inside your App and select **Restart Rollout**. 

Note2: OpenShift wants the main branch to be named *master* by default, you have two options:
1. Push to origin/master to deploy
2. Change the setting in Openshift to *main*:    
    Edit BuildConfig ==> Show advanced git options ==> Git reference: `main`
