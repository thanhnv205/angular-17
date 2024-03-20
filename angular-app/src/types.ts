import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'body';
  context?: HttpContext;
  params?: ParamProps;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface ParamProps {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
}

export interface MenuProps {
  menu_name: string;
  slug: string;
  description: string;
}

export interface Community {
  title: string;
  description: string;
  image_name: string;
}

export interface CommunityProps {
  heading: string;
  title: string;
  description: string;
  slug: string;
  communities: Community[];
  highlight: string
}

export interface Image {
  image_name: string;
}

export interface OurWorkProps {
  slug: string;
  title: string;
  description: string;
  images: Image[];
}
