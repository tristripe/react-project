import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      options.paths.src, 'node_modules'
    ],
    mainFiles: ['index'],
    alias: {
      public: path.resolve( "public/"),
      "@app": path.resolve( "src/app"),
      "@entities": path.resolve( "src/entities"),
      "@features": path.resolve( "src/features"),
      "@helpers": path.resolve( "src/helpers"),
      "@pages": path.resolve( "src/pages"),
      "@shared": path.resolve( "src/shared"),
      "@theme": path.resolve( "src/theme"),
      "@widgets": path.resolve( "src/widgets"),
    }
  }
}
