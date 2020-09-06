declare module 'koa-parameter' {
    import Application from "koa";
    export default function(app: Application, translate?: string) : (ctx: Application.Context, next: Application.Next) => void;
}
