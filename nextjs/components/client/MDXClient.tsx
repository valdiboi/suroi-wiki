"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Link from "@/components/links/Link";
import EventItem from "../articles/notices/Event";
import TimeLink from "../links/TimeLink";
import CommitLink from "../links/CommitLink";
import FileLink from "../links/FileLink";
import DevWeapon from "../articles/notices/DevWeapon";
import Stub from "../articles/notices/Stub";
import { HTMLProps } from "react";
import Removed from "../articles/notices/Removed";

const components = {
  Link,
  Event: EventItem,
  TimeLink,
  FileLink,
  CommitLink,
  Removed,
  DevWeapon,
  Stub,
  a: (props: HTMLProps<HTMLAnchorElement>) => (
    <Link title={props.title} href={props.href!}>
      {props.children}
    </Link>
  ),
};

export default function MDXClient(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
