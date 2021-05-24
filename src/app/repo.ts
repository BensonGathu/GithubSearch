export class Repo {
    constructor(public name: string,
            public description:string,
            public html_url: string,
            public created_at: Date,
            public language:string,
            public forks:number,
            
    ){}
}
