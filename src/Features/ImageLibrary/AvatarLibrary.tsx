import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { getPhotos } from "../../Helpers/MediaLibrary";
import { useDispatch, useSelector } from "react-redux";
import { saveFromLibrary } from "../../Redux/Features/ImageLibrary/ImageSlice";
import Avatar from "./Avatar";
import Color from "../../Components/Color";

function AvatarLibrary(props: any) {
    const dispatch = useDispatch();

    const imageData = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.imageLibrary.photos;
    });

    React.useEffect(() => {
        (async () => {
            try {
                let response = await getPhotos();
                dispatch(saveFromLibrary(response));

                return;
            } catch (error) {
                return;
            }
        })();
    }, []);

    const renderItem = ({
        item
    }: any) => {
        return (
            <>
                <Avatar source={item.uri} id={item.id} />
            </>
        );
    };

    const memoizedValue = React.useMemo(() => renderItem, [imageData]);

    return (
        <>
            {/* <PostQn question="Property photos" /> */}

            <FlatList
                data={imageData}
                // keyExtractor={(item) => item.id}
                renderItem={memoizedValue}
                numColumns={3}
                contentContainerStyle={styles.flatlistContainer}
            />
        </>
    );
}

const styles = StyleSheet.create({
    flatlistContainer: {
        paddingBottom: 40,
        // paddingTop: 10,
    },
});

export default React.memo(AvatarLibrary);
