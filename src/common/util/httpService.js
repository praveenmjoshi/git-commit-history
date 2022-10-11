import { initializeOctoKit } from "./octokit"

export const getCommits = async() =>{
    try{
        const octoKit = initializeOctoKit();
        const response = await octoKit.request('GET /repos/{owner}/{repo}/commits', {
            owner: 'praveenmjoshi',
            repo: 'github-commit-history-app'
          })
        return response.data || []
    }catch(error){
        throw error
    }
}