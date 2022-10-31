import { ref, type Ref } from "vue";
import router from "@/router";

export type BurgerType = "burger" | "arrow";

const CHATS_ROUTE_NAME = "chats";

const chatMenuButtonType: Ref<BurgerType> = ref("burger");
const activeChatRoomId: Ref<string | null> = ref(null);

const handlePushIntoMain = () => {
  router.push({ name: CHATS_ROUTE_NAME });
  setActiveChatRoomId(null);
};

const setChatMenuButtonType = (type: BurgerType) =>
  (chatMenuButtonType.value = type);

const setActiveChatRoomId = (roomId: string | null | undefined) => {
  if (!roomId) {
    activeChatRoomId.value = null;
    setChatMenuButtonType("burger");
    return;
  }

  activeChatRoomId.value = roomId;
  setChatMenuButtonType("arrow");
};

export {
  CHATS_ROUTE_NAME,
  chatMenuButtonType,
  activeChatRoomId,
  handlePushIntoMain,
  setChatMenuButtonType,
  setActiveChatRoomId,
};
