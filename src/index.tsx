import { Color, List } from "@raycast/api";

export default function TestIcons(): JSX.Element {
  return <List>
    <List.Item title="" accessories={[{text: 'gitlab'}, {icon: 'gitlab.png'}, {icon: 'gitlab_64.png'}]}/>
    <List.Item title="" accessories={[{text: 'warning'}, {icon: 'warning.png'}, {icon: 'warning_64.png'}]}/>
    <List.Item title="" accessories={[{text: 'gitpod'}, {icon: 'gitpod.png'}, {icon: 'gitpod_64.png'}]}/>
    <List.Item title="" accessories={[{text: 'commit'}, {icon: {source: 'commit.png', tintColor: Color.PrimaryText}}, {icon: {source: 'commit_64.png', tintColor: Color.PrimaryText}}]}/>
    <List.Item title="" accessories={[{text: 'approved'}, {icon: {source: 'approved.png', tintColor: Color.PrimaryText}}, {icon: {source: 'approved_64.png', tintColor: Color.PrimaryText}}]}/>
    <List.Item title=""/>
  </List>;
}
