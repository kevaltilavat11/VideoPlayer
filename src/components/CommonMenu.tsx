import { StyleSheet, Text, View } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

type CommonMenuProps = {
    id : string
  deleteComment: (id: any) => void;
  commentDelete?: boolean;
};

export const CommonMenu = ({id,commentDelete,deleteComment}:CommonMenuProps) => (
  <View style={styles.container}>
    <Menu opened={commentDelete}>
      <MenuTrigger/>
      <MenuOptions customStyles={{optionsContainer:{width:'25%'}}}>
        <MenuOption onSelect={() =>deleteComment(id)} >
          <Text style={styles.menuText}>Delete</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top:30,
    right:10
  },
  menuText : {
    color: 'red',
    textAlign:'right',
    paddingVertical:8,
    paddingHorizontal:20
}
});
